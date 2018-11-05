<template>
  <div id="comeditor">
    <div class="editor">
    </div>
      <div class="toolbar">
        <div class="settitle">基本设置</div>
        <div class="setbox">
          <ul>
            <li class="fontfamily">
              <span>字体:</span>
              <select>
                <option value="微软雅黑">微软雅黑</option>
                <option value="彩云体">彩云体</option>
                <option value="宋体">宋体</option>
              </select>
            </li>
            <li class="fontsize">
              <span>字体大小:</span>
              <select>
              <option value="12px">12px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              </select>
              <div class="fontstyle">
                <span class="italic"><Icon type="md-bicycle"/></span>
                <span class="italic"></span>
                <span class="underline"></span>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'comeditor',
  data () {
    return {
      msg: 'comeditor'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
#comeditor {
  margin: 0 auto;
  width: 800px;
  height: 500px;
  background-color:skyblue;
  overflow: hidden;
  .editor {
    float: left;
    width: 500px;
    height: 100%;
    background-color: pink;
  }
  .toolbar {
    float:right;
    width: 300px;
    height: 100%;
    background-color:#ccc;
    .settitle {
      width: 100%;
      height: 40px;
      padding-left: 20px;
      border-bottom: 1px #000 solid;
      line-height: 40px;
      text-align: left;
      font-size: 20px;
      color: 000;
    }
    .setbox {
     width: 100%;
     padding-left: 20px;
     ul {
       width: 100%;
       height: 40px;
       li.fontfamily {
         width: 100%;
         height: 100%;
         background-color: green;
         margin-bottom: 20px;
         span {
           height: 100%;
           line-height: 40px;
           margin-right: 30px;
           font-size: 16px;
         }
         select {
           width: 150px;
           height: 30px;
         }
       }
        li.fontsize {
         width: 100%;
         height: 100%;
         background-color: green;
         margin-bottom: 10px;
         span {
           height: 100%;
           line-height: 40px;
           margin-right: 10px;
           font-size: 16px;
         }
         select {
           width: 60px;
           height: 30px;
         }
         .fontstyle{
           float:right;
           width: 135px;
           height: 40px;
           background-color: pink;
           span {
             float: left;
             margin-top: 3px;
             width: 33px;
             height: 33px;
            border: 1px #000 solid;
            &:nth-child(3){
              float: right;
            }
            Icon {
              width: 100%;
              height: 100%;
              font-size: 20px;
            }
           }
         }
       }
     }
    }
  }
}
</style>
