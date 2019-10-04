<template>
<div class="my-table">
    <el-table :data="tableData" style="width: 100%" ref="multipleTable">
        <!-- <el-table-column type="selection" :selectable='checkboxT'></el-table-column> -->
        <el-table-column label="选择" width="100">
            <template slot-scope="scope">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox @change="checkBoxFun(scope.row.code)" :label="scope.row.code"></el-checkbox>
                </el-checkbox-group>
            </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    close,
    closeSync
} from 'fs';
export default {
    name: "test",
    data() {
        return {
            checkList: [],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                code: 1,
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄',
                code: 2,
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                code: 3,
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄',
                code: 4,
            }]
        }
    },
    methods: {
        checkBoxFun(val) {
            console.log(val)
            // if (this.checkList.includes(val)) {
            //     this.checkList = [];
            //     this.checkList.push(val);
            // }
            this.checkList = [];
            this.checkList.push(val);
        },
    }
}
</script>

<style lang="scss">
.my-table {
    .el-checkbox__label {
        display: none;
    }
}
</style>
