<!-- <template>
  <form @submit="checkForm">
    <h3>Register Trip</h3>

    <div class="container">
      <div id="dropdownlist" class="row col-6">
        
           <div>
          <ddl @click-ddl="clickedPickUpDdl" :ddlInput="pickUpDes" :titleDdl="pickUpDll"></ddl>

        </div>
           <div>
          <ddl @click-ddl="clickedDestDdl" :ddlInput="dests" :titleDdl="destDll"></ddl>

        </div>
         
      </div>
         <div class="row col-6">
           <div>
          <ddl @click-ddl="clickedShowSeatsDetails" :ddlInput="seatsP" :titleDdl="seatDdl"></ddl>

        </div>
          </div>

      <div class="row col-6">
          
        <span>date</span>
        <Datepicker @select-date-from-datepicker="selectDateDP"></Datepicker>

        <span>time</span>
        <VueTimepicker @click_timepicker_comp="selectTimeP"></VueTimepicker>

        
      </div>
    </div>


    <div>

      <div>male/female
        <toggleBtn v-model="values" class="toggle-red" on-label="1" off-label="2" @click="togglClk" />
      </div>
    </div>
    <div>

      
    </div>
    <div class="row">
      Selected pickup:{{ selected }}
    </div>
    <div class="row">
      Selected whre to:{{ selectedw }}
    </div>
    <div class="row">
      Selected seat:{{ selectedS }}
    </div>
    <div class="row">
      Selected date:{{ selectedDatefDP }}
    </div>
    <div class="row">
      Selected Time:{{ selectedTime }}
    </div>
    <div class="row">
      Selected f/M:{{ values?'M': 'F' }}
    </div>

    <input type="submit" value="Submit">
    
  </form>
</template>


<script>

import toggleBtn from '../components/Inputs/ToggleBtn.vue'
import ddl from '../components/Inputs/dropdownlist.vue'
import Datepicker from '../components/Inputs/Datepicker.vue'
import VueTimepicker from '../components/Inputs/Timepicker.vue'



export default {
  name: 'RegisterTrip',
  inheritAttrs: false, // disable 'non-props' warning,
  components: {
    toggleBtn,
    ddl,
    Datepicker,
    VueTimepicker,

  },
  data() {
    return {
      pickUpDes: [
        { name: 'pv15', id: 1 },
        { name: 'pv16', id: 2 },
        { name: 'the nest', id: 3 },
      ],
      dests: [
        { name: 'pv15', id: 1 },
        { name: 'pv16', id: 2 },
        { name: 'the nest', id: 3 },
      ],
      seatsP: [
        { name: '1.1', id: 1 },
        { name: '2.2', id: 2 },
        { name: '3.3', id: 3 },
        { name: '4.4', id: 4 },
        { name: '5.5', id: 5 },
        { name: '6.6', id: 6 },
      ],
      selected: '',
      selectedw: '',
      selectedS: '',
      newMeetingData: {},
      isToggled: false,
      buttonState: 1,
      values: true,
      example2: {
        value: false,
        onLabel: 'On',
        offLabel: 'Off'
      },
      sportsData: [
        { name: 'Badminton', id: 1 },
        { name: 'Cricket', id: 2 },
        { name: 'Football', id: 3 },
      ],
      date: null,
      yourTimeValue: {
        HH: "10",
        mm: "05"
      },
      selectedDatefDP: '',
      selectedTime: '',
      valueD: '',
    seatDdl:'Number of seat',
    pickUpDll:'pick up',
    destDll:'where to'
    }
  },
  formSubmitted: false,

  methods: {
    endCompile: function () {
      console.log('calling from mounted')
    },
    togglClk: function () {
      this.values = !this.values
      console.log(this.values)
    },
    submitForm: function () {
      this.formSubmitted = true
      console.log('form clicked')
      console.log('pick up :' + this.selected)
      console.log('where to :' + this.selectedw)
      console.log('total seats :' + this.selectedS)
      console.log('M/F :' + this.values)
      console.log('date choosen :' + this.date)
    },
    dateSelected: function (selectedDate) {
      console.log('dateSelected' + selectedDate)
      this.selectedDatefDP = selectedDate
    },
    clickedShowSeatsDetails: function (seat) {
      console.log('parent get selected seat:')
      console.log(seat)
      this.selectedS = seat
    },
    clickedPickUpDdl: function (ddlSelected){
    console.log('pickup clicked')
    console.log(ddlSelected)
    this.selected = ddlSelected
    },
    clickedDestDdl: function (ddlSelected){
     console.log('dest clicked')
    console.log(ddlSelected)
    this.selectedw = ddlSelected
    },
    selectDateDP: function (v) {
      this.selectedDatefDP = v
    },
    selectTimeP: function (v) {
      this.selectedTime = v
    },
    checkForm: function () {
      console.log('check form')
    }
  },

  mounted() {
    this.endCompile()
  },
  computed: {
    buttonClass() {
      let returnClass = ''
      switch (this.buttonState) {
        case 2:
          returnClass = 'green';
          break;
        case 3:
          returnClass = 'blue';
          break;
        case 4:
          returnClass = 'yellow';
          break;
        default:  // 1
          returnClass = 'red';
      }

      return returnClass
    }
  }

};
</script> 

<style scoped>
.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

.toggle-red {
  --toggle-bg-on: red;
  --toggle-border-on: red;
  --toggle-bg-off: blue;
  --toggle-border-off: blue;
}
</style>

<style src="@vueform/toggle/themes/default.css">

</style> -->