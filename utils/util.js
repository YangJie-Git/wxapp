const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const goVideoDetails = (id)=>{
  console.log('goVideoDetails', id);
  wx.navigateTo({
    url: '../../pages/videdetails/videdetails?id='+id
  })
}

const goAudioDetails = (id) => {
  console.log('goAudioDetails', id);
  wx.navigateTo({
    url: '../../pages/audiodetails/audiodetails?id=' + id
  })
}

const goBack = () => {
  console.log('goBack');
  wx.navigateBack();
}
module.exports = {
  goVideoDetails: goVideoDetails,
  goAudioDetails: goAudioDetails,
  goBack: goBack,
  formatTime: formatTime
}
