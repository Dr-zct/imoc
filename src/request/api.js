import { get, post } from './http'

// 左上 云资源总览
export function getCloudData() {
    return get('/api/cloud/cloudResourceOverall')
}
// 左中 视频存储
export function getVideoStorage() {
    return get('/api/cloud/videoStorageOverall')
}
// 左中 图片存储
export function getPicStorage() {
    return get(`/api/cloud/pictureStorageOverall`)
}
//  大数据资源概览，平台告警概览，工单概览的下拉框
export function getSearchOptions() {
    return get(`/api/cloud/enumerations`)
}
// 左下 大数据资源概览
export function getBigData(params) {
    return get(`/api/cloud/bigDataResourceOverall?name=${params.checkParam}&pageNum=${params.pageNum}&pageSize=${params.pageSize}`)
}
// 中上 图片上的 资源总览
export function getCenterData() {
    return get(`/api/cloud/ciNumberOverall`)
}
// 中下 平台告警概览
export function getAlarmViewData(params) {
    return get(`/api/cloud/platformAlarmOverall?ecureProxyServer=${params.checkParam}&pageNum=${params.pageNum}&pageSize=${params.pageSize}`)
}
// 右上 告警级别分布
export function getAlarmLevelData() {
    return get(`/api/cloud/alarmLevelDistribution`)
}
// 右中 工单统计
export function getOrderStatisticalData() {
    return get(`/api/cloud/workOrderStatusDistribution`)
}
// 右下 工单概览
export function getOrderView(params) {
    return get(`/api/cloud/workOrderOverall?modelType=${params.checkParam}&pageNum=${params.pageNum}&pageSize=${params.pageSize}`)
}

// 下钻 服务器，交换机，虚拟机，存储，防火墙的下钻
export function getResourceDetail(params) {
    return get(`/api/cloud/ciNumberOverall/deviceInfo?deviceType=${params.deviceType}&pageNum=${params.pageNum}&pageSize=${params.pageSize}`)
}
// 下钻 云资源的下钻
export function getCloudDetail(params) {
    return get(`/api/cloud/cloudResourceOverall/physicalHost?pageNum=${params.pageNum}&pageSize=${params.pageSize}`)
}
