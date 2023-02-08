<template>
    <div>
        <span class="m-1">avaibale seat</span>
        <select v-model="selectedS" id="selPickUp" @change="showSeatDetails">
            <option id="ddlSeat" v-for="wt in seats" :key="wt.id" v-bind:value="wt.name">
                {{ wt.name }}
            </option>
        </select>

    </div>
</template>
<script>



export default {

    components: {

    },
    data() {
        return {
            value: true,
            seats: [
                { name: '1', id: 1 },
                { name: '2', id: 2 },
                { name: '3', id: 3 },
                { name: '4', id: 4 },
                { name: '5', id: 5 },
                { name: '6', id: 6 },
            ],
            selectedS: '',
        }
    },
    methods: {
        showSeatDetails:function(){
            console.log('child selected seat:')
            console.log(this.selectedS)
            this.$emit('click-show-Seat-Details',this.selectedS)
        }
    }
}
</script>

<!--style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style-->
