//  成功状态过滤器
export function buyfilter(code) {
	const arr = ['成功', '失败', '待定']
	let index = code * 1
	return arr[index]
}

export function sliceString(value, num = 10, string) {
  if (value === 0) {
    return '0'
  } else if (!value) {
    return string || ''
  } else if (String(value).length <= num) {
    return value
  } else {
    return String(value).slice(0, parseInt(num)) + '...'
  }
}