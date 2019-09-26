import ReactEcharts from "echarts-for-react";

// 示例: https://www.echartsjs.com/examples/zh/index.html
// 配置: https://www.echartsjs.com/zh/option.html#title

const getOps = () => {
  return {
    
  }
}

const default = (
  <ReactEcharts
    style={{ height: "400px" }}
    option={getOps({ title: "经常访问的表", data: dataHandle(data) })}
    notMerge={true}
    lazyUpdate={true}
    theme={"theme_name"}
  />
)