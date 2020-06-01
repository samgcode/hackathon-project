<template>
    <chart :options="barChartOptions" />
</template>

<script>
import Echarts from 'vue-echarts';
import chart from 'vue-echarts';
import 'echarts/lib/chart/bar';

export default {
    components: {
        chart,
    },
    data() {
        return {
            barChartOptions: {
                xAxis: {
                    data: [
                        'Rockyview general hospital', 
                        'South Health Campus', 
                        'Peter Lougheed Center',
                        'Sheldon M Chumir Health Center',
                        'Foothills Medical Center',
                        'Rexall (SW)',
                        'Rexall (NW)',
                        'Shoppers Drugmart',
                        'RemedysRx'
                    ]
                },
                yAxis: {
                    type: 'value'  
                },
                series: [
                    {
                        type: 'bar',
                        data: [20, 30, 17, 92, 5, 101, 45, 2, 47]
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
.chart-wrapper {
    width: 100%;
    height: 700px;
}
</style>