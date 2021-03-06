var calculate = function(a) {
  var result = new Object()

  // 边封长度即为原始尺寸高度
  result.bianfeng = a.raw_height
  // 上下滑为原始尺寸宽度减去两边边封大厚度（默认为0.05米）//0.05 bianfeng_h_d = 0.025
  result.shangxiahua = a.raw_width - 2 * 0.025
  // 扁管长度（如有翻窗）即为上下滑长度
  result.bianguan = result.shangxiahua

  // 钩光极长度，如果有翻窗，即为扇子高度（默认为1.175米）；否则为原始尺寸高度减去上滑厚度和下滑厚度（上下滑总厚度默认为0.065米）
  result.gouguangji = a.hasPF ? a.shanzi_height : a.raw_height - 0.065
  // console.log('result.gouguangji值为', result.gouguangji)

  // 上下方长度
  // 2个扇子时，为原始尺寸宽度减去两边边封小厚度（默认为0.012米），然后除以2
  var shangxiafang2 = (a.raw_width - 0.012) / 2
  // 4个扇子时
  var shangxiafang4 = (a.raw_width + 0.018) / 4
  result.shangxiafang = ((a.WC == 2) ? shangxiafang2 : shangxiafang4)

  // 扇子玻璃高度为扇子高度（钩光极长度）减去上下方总厚度（默认为0.075米）
  result.shanziboli_gao = result.gouguangji - 0.075
  // 扇子玻璃宽度为扇子宽度（上下方长度）减去钩极和光极的厚度（默认为0.065米）
  result.shanziboli_kuan = result.shangxiafang - 0.065

  // 吊线长度为原始尺寸高度减去扇子部分高度和扁管厚度（一个，默认为0.025米）
  result.diaoxian = a.raw_height - (result.gouguangji + 0.065) - 0.025
  // 翻窗玻璃高度为吊线长度减去预留空隙0.002米
  // 扇子部分分为扇子高度与上下方厚度（上下方总厚度默认为0.065米）
  result.fanchuangboli_gao = result.diaoxian - 0.002
  // 翻窗玻璃平均宽度等于扁管长度减去吊线总厚度（吊线实际就是扁管，扁管厚度默认为0.025米），然后除以翻窗数PFC
  var fanchuangboli_kuan = (result.bianguan - 0.025 * (a.PFC - 1)) / a.PFC
  // 翻窗玻璃实际宽度为平均宽度加3毫米或者减2毫米
  result.fanchuangboli_kuan1 = fanchuangboli_kuan + 0.003
  result.fanchuangboli_kuan2 = fanchuangboli_kuan - 0.002

  result.bianfeng = result.bianfeng.toFixed(3)
  result.shangxiahua = result.shangxiahua.toFixed(3)
  result.bianguan = result.bianguan.toFixed(3)
  result.gouguangji = result.gouguangji.toFixed(3)
  result.shangxiafang = result.shangxiafang.toFixed(3)
  result.shanziboli_gao = result.shanziboli_gao.toFixed(3)
  result.shanziboli_kuan = result.shanziboli_kuan.toFixed(3)
  result.diaoxian = result.diaoxian.toFixed(3)
  result.fanchuangboli_gao = result.fanchuangboli_gao.toFixed(3)
  result.fanchuangboli_kuan1 = result.fanchuangboli_kuan1.toFixed(3)
  result.fanchuangboli_kuan2 = result.fanchuangboli_kuan2.toFixed(3)

  return result
}

module.exports = {
  cal: calculate
}