// collapse-transition.js,这个文件我是放在utils工具类中的

const transitionStyle = '0.3s all linear'
const Transition = {
  beforeEnter (el) {
    el.style.transition = transitionStyle
    if (!el.dataset) el.dataset = {}

    el.style.width = 0
  },

  enter (el) {
    console.log(el,el.scrollWidth,el.scrollWidth,el.offsetWidth);
    if (el.scrollWidth !== 0) {
      el.style.transition = transitionStyle;
      el.style.width = el.scrollWidth + "px";
    } else {
      el.style.width = ''
    }
    el.style.overflow = 'hidden'
  },

  afterEnter (el) {
    el.style.transition = ''
    el.style.width = ''
  },

  beforeLeave (el) {
    if (!el.dataset) el.dataset = {};
    el.style.width = el.scrollWidth + "px";
    el.style.overflow = 'hidden'
  },

  leave (el) {
    console.log(el.scrollWidth,el.scrollWidth,el.offsetWidth);
    if (el.scrollWidth !== 0) {
      el.style.transition = transitionStyle
      el.style.width = 0
    }
  },

  afterLeave (el) {
    el.style.transition = ''
    el.style.width = ''
  }
}

export default {
  name: 'CollapseTransition',
  functional: true,
  render (h, {
    children
  }) {
    const data = {
      on: Transition
    }
    return h('transition', data, children);
  }
}

