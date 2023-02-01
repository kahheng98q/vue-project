<template>
    <div>
        <Datepicker inputFormat="yyyy-MMM-dd" locale="my" :enableTimePicker="false" v-model="date"  @closed="onchangeDate" :format="datepickerFormat" ></Datepicker>
        <p>{{ date }}</p>
    </div>
</template>
  
<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: {
        Datepicker,
    },
    data() {
        return {
            value: true,
            date: new Date(2020, 1, 1),
            pickerConfig: {
                value: '2020/10/22'
            },
            defaultDate: '2018-12-04',
            datepickerFormat:'yyyy-MMM-dd'
        }
    },
    methods: {

        otherChangeHandler: function (eventData, yourArg1, yourArg2) {
            console.log(eventData)
            // -> [{data: {HH:..., mm:... }}]
            console.log(yourArg1)
            // -> 'foo'
            console.log(yourArg2)
            // -> 'bar'
        },
        changeHandler(eventData) {
            console.log(eventData)
            // -> {data: {HH:..., mm:... }}
        },
        getSelectedDate() {
            console.log(this.$refs.datepicker1.value);
            //this.$emit("selected", selectedDate)
        },
        onchangeDate:function(){
            console.log(this.date);
            this.$emit('select-date-from-datepicker',this.date)
        }
    }
}
</script>
  
<style src="@vueform/toggle/themes/default.css">

</style>