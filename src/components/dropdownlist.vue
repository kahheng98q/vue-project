<template>
    <div>
        <span class="m-1">{{titleDdl}}</span>
        <select v-model="selectedDdl" id="selPickUp" @change="ddlOnChange">
            <option id="ddlSeat" v-for="wt in ddlInput" :key="wt.id" v-bind:value="wt.name">
                {{ wt.name }}
            </option>
        </select>

    </div>
</template>
<script>

    export default {
        data() {
            return {
                selectedDdl: ''
            }
        },
        props: {
            ddlInput: Object,
            titleDdl: String
        },
        methods: {
            ddlOnChange: function () {
                console.log('child selected seat:')
                console.log(this.selectedDdl)
                this.$emit('click-ddl', this.selectedDdl)
            }
        }
    }
</script>


