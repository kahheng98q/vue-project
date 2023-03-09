<template>
    <div>
        <VueTimepicker format="HH:mm" v-model="yourTimeValue" :minute-interval="10" @change="timechg">
        </VueTimepicker>
        <!--@change="changeHandler"-->
    </div>
</template>

<script>
import VueTimepicker from 'vue3-timepicker'
import 'vue3-timepicker/dist/VueTimepicker.css'

export default {
    components: {
        VueTimepicker,
    },
    data() {
        return {
            value: true,
            yourTimeValue: {
                HH: '',
                mm: ''
            },
        }
    },
    methods:{

    otherChangeHandler: function (eventData, yourArg1, yourArg2) {
        console.log('call from timepicker')
      console.log(eventData)
      // -> [{data: {HH:..., mm:... }}]
      console.log(yourArg1)
      // -> 'foo'
      console.log(yourArg2)
      // -> 'bar'
    },
    changeHandler(eventData) {
        console.log('call from timepicker')
      console.log(eventData)
      // -> {data: {HH:..., mm:... }}
    },
    timechg:function(){
        console.log('timepicker clicked')
        console.log(this.yourTimeValue)
        this.$emit('click_timepicker_comp',this.yourTimeValue)
    }
    }
}
</script>

<style src="@vueform/toggle/themes/default.css">
</style>