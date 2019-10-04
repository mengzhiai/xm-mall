<template>
<div>
    <el-table :data="tableData" border stripe>
        <el-table-column label="name" prop="name">
        </el-table-column>
        <el-table-column label="age" prop="age">
        </el-table-column>
        <el-table-column label="sex" prop="sex">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import { close, closeSync } from 'fs';
export default {
    data() {
        return {
            tableData: [

            ]
        };
    },
    mounted() {
        // this.init();
        this.list()
    },
    methods: {
        init() {
            let data = [{
                    name: "张三1",
                    age: 12,
                    sex: '男'
                },
                {
                    name: "张三1",
                    age: 12,
                    sex: '女'
                },
                {
                    name: "张三3",
                    age: 13,
                    sex: '男'
                },
                {
                    name: "张三1",
                    age: 14,
                    sex: '男'
                }
            ];
            /* let obj = {};
            let peon = data.reduce((cur, next) => {
              debugger
                obj[next.name] ? "" : obj[next.name] = true && cur.push(next);
                return cur;
            }, []) //设置cur默认类型为数组，并且初始值为空的数组
            console.log(peon); */

            // this.unique(data);
            var arr2 = data.filter((x, index, self) => {
                var arrids = []
                data.forEach((item, i) => {
                    arrids.push(item.age)
                })
                return arrids.indexOf(x.age) === index
            })
            // console.log(arr2);
            this.unique(arr2);
        },
        unique(data) {
          var arr2 = data.filter((x, index, self) => {
                var arrids = []
                data.forEach((item, i) => {
                    arrids.push(item.name)
                })
                return arrids.indexOf(x.name) === index
            })
            // console.log(arr2);
            this.tableData = arr2;
        },
        list(){
          let arr = [3,3,4,4,5,5,6,7];
          let data = [{
                    name: "张三1",
                    age: 11,
                    sex: '男'
                },
                {
                    name: "张三2",
                    age: 12,
                    sex: '女'
                },
                {
                    name: "张三3",
                    age: 13,
                    sex: '男'
                },
                {
                    name: "张三4",
                    age: 14,
                    sex: '男'
                },
                {
                    name: "张三1",
                    age: 15,
                    sex: '男'
                },
                {
                    name: "张三5",
                    age: 13,
                    sex: '男'
                }
                
            ];
          // 数组之和
          /* let sum = arr.reduce((prev,cur)=>{
            sum = prev + cur;
            return sum
          },0);
          console.log(sum); */

          //求最大值
          /* let max = arr.reduce((prev,cur)=>{
            return Math.max(prev,cur)
          })
          console.log(max); */

          //数组去重
          let obj = {};
          let newArr = data.reduce((prev,cur)=>{
            obj[cur.name] ? "" : obj[cur.name] = true && prev.push(cur);
            return prev;
          },[])
          console.log(newArr);
          this.newUnique(newArr);
        },
        newUnique(data){
          let obj = {};
          let newArr = data.reduce((prev,cur)=>{
            obj[cur.age] ? "" : obj[cur.age] = true && prev.push(cur);
            return prev;
          },[])
          console.log(newArr);
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
