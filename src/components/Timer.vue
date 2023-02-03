<script lang="ts">
import {differenceInSeconds} from "date-fns"
export default {
    data()
    {
        const dateISOString = "2022-02-21T10:56:19.678Z"
        
        const started_at = "2023-02-17T10:00:00.000Z"
        return {
            items: [
                {label: "heures", value: 0},
                {label: "minutes", value: 0},
                {label: "secondes", value: 0},
            ],
            state: 'paused',
            timerCleaner: () => {},

            totalSeconds: differenceInSeconds(
                new Date(started_at),
                new Date()
            ),

            started_at: started_at,
            
            dateISOString: dateISOString,
        }
    },

    async mounted()
    {
        this.startTimer()
    },
    
    updated(){
        console.log('updated')
    },

    computed: {

        test()
        {
            return window.setInterval(() => 1, 1000)
        },

        datePresent(){
            return new Date().toISOString()
        },

        formatedItems(){
            const totalSeconds = Math.abs(this.totalSeconds) 
            const seconds = totalSeconds % 60
            const minutes = Math.floor((totalSeconds / 60)) % 60
            const hours = Math.round((totalSeconds / 60 / 60) % 24)
            const days = Math.round(totalSeconds/ 60 / 60 / 24)
            return [
                {label: "jours", value: days},
                {label: "heures", value: hours},
                {label: "minutes", value: minutes},
                {label: "secondes", value: seconds},
            ]
        }, 
        
    },
    methods: {
        checkNumberDigits(myNumber : number)
        {
            let n = myNumber.toString();
        
            if ( n.length < 2 )
            {
                return "0" + n;
            }
        
            return n;
        },
        
        async startTimer()
        {

           /*  if(!this.started_at){

                const dateString = new Date().toISOString()
                const {data} = await axios.post(`${location.origin}/api/launch/${this.reservation.id}`,  {
                    dateString
                })  
                this.reservation = data.data
            }
            this.state =(this.state === "play") ? "paused" : "play"
            console.log(this.started_at)
            const timerID = window.setInterval(() => {
                const datePresent = new Date().toISOString()
                this.totalSeconds = differenceInSeconds(
                    new Date(this.started_at),
                    new Date(datePresent),
                ) 
                if(this.state === "paused"){
                    clearInterval(timerID)
                }
            }, 1000)
            this.
            timerCleaner = () => {
                clearInterval(timerID)
                console.log("test")
            } */
            const timerID = window.setInterval(() => {
                const datePresent = new Date().toISOString()
                this.totalSeconds = differenceInSeconds(
                    new Date(this.started_at),
                    new Date(datePresent),
                ) 
                /* if(this.state === "paused"){
                    clearInterval(timerID)
                } */
            }, 1000)
        }
    }
}
</script>

<template>
    <div class="">
        <div class="border shadow-sm border-gray-100 py-4 px-2 rounded-sm flex justify-evenly items-center">
            <div :key="index" v-for="({label, value}, index) in formatedItems"  class="flex flex-col border sm:mx-2 sm:w-[3rem] md:w-[4.5rem] border-slate-400 sm:p-2 md:p-3 rounded-sm">
                <span class=" md:text-lg font-[600] ">{{ checkNumberDigits(value) }} </span>
                <span class="sm:text-[6px] md:text-[9px] uppercase block mt-2">{{ label }} </span>
            </div>
        </div>

    </div>
</template>

<style>

</style>
