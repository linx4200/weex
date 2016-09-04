import { push, pop, initial } from './actions/router'
import { assert } from './Util'

const DURATION = 500

class Router {
  constructor (options) {
    this.store = options.store
    this.animation = options.animation
    this.map = options.routerMap || {}
    this.dw = 0
    this.lastOp = null
    this.stark = []

    // push the first page
    for (const key of Object.keys(this.map)) {
      if (this.map[key].initial) {
        this.store.dispatch(initial(key))
      }
    }

    this.store.subscribe(() => {
      const stack = JSON.parse(JSON.stringify(this.select(this.store.getState())))
      if (this.lastOp && this.lastOp === 'push' && stack[0]) {
        const page = this.map[stack[0]]
        if (page && page.root && this.dw) {
          this.animation.transition(page.root, {
            styles: {
              transform: `translate(-${this.dw}px, 0)`
            },
            duration: DURATION,
            timingFunction: 'linear'
          })
        }
      }

      if (this.lastOp && this.lastOp === 'pop' && this.stark[0]) {
        const page = this.map[this.stark[0]]
        if (page && page.root && this.dw) {
          this.animation.transition(page.root, {
            styles: {
              transform: `translate(0, 0)`
            },
            duration: DURATION,
            timingFunction: 'linear'
          })
        }
      }

      this.stark = stack
    })
  }

  select (state) {
    return state.router
  }

  push (page) {
    const p = this.map[page]
    assert(p, 'page does not exist')

    this.lastOp = 'push'
    this.store.dispatch(push(page))
  }

  pop () {
    this.lastOp = 'pop'
    this.store.dispatch(pop())
  }

  addPageRoot (page, $root) {
    const p = this.map[page]
    assert(p, 'page does not exist')

    assert($root, '$root is not defined')

    p.root = $root
  }
}

export default Router
