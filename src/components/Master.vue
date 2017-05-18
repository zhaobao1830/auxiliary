<template>
  <div>
    <div class="modal-content" v-for="(comp,index) in comps" :style="style(index,comp)">
      <div class="modal-header">
        header
      </div>
      <div class="modal-body">
        <comment :is="comp"></comment>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" @click="clickHandler(btn.value, comp, index)" v-for="btn in btns">{{btn.text}}</button>
      </div>
    </div>
    <h-dialog-back ref="back" :z-index="realIndex-1"></h-dialog-back>
  </div>
</template>

<script type="text/ecmascript-6">
import hDialogBack from './background'

function getclientPoint () {
  return {
    width: document.documentElement.clientWidth || document.body.clientWidth,
    height: document.documentElement.clientHeight || document.body.clientHeight
  }
}

export default {
  name: 'HDialog',
  data () {
    return {
      comps: []
    }
  },
  props: {
    'btns': {
      type: Array,
      default: function () {
        return [{text: 'ok', value: 'ok'}, {'text': 'cancel', value: 'cancel'}]
      }
    },
    'mIndex': {
      type: Number,
      default: 19861016
    }
  },
  computed: {
    realIndex: function () {
      return this.mIndex
    }
  },
  components: {
    hDialogBack
  },
  methods: {
    open: function (comp) {
      comp.promise = new Promise(function (resolve, reject) {
        comp.resolve = resolve
        comp.reject = reject
      })
      comp.width = comp.width || 600
      comp.height = comp.height || 400
      this.comps.push(comp)
      if (!this.$refs.back.show) {
        this.$refs.back.open()
      }
      return comp.promise
    },
    clickHandler: function (type, comp, index) {
      let self = this
      let close = function () {
        self.comps.splice(index, 1)
        if (self.comps.length === 0 && self.$refs.back.show) {
          self.$refs.back.close()
        }
      }
      /** 只提供promise模式 */
      comp.resolve({'type': type, 'close': close})
    },
    style: function (index, comp) {
      let point = getclientPoint()
      return {
        zIndex: this.realIndex + index,
        width: comp.width + 'px',
        height: comp.height + 'px',
        left: ((point.width - comp.width) / 2) + 'px',
        top: ((point.height - comp.height) / 2) + 'px'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
