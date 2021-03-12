var parts = ['ภาคกลาง', 'ภาคเหนือ', 'ภาคอีสาน', 'ภาคใต้']
var provinces = [['กรุงเทพ', 'อ่างทอง', 'พระนครศรีอยุธยา'],
				['เชียงใหม่', 'เชียงราย', 'น่าน', 'พะเยา']
				['นครราชสีมา', 'บุรีรัมย์', 'อุบลราชธานี','หนองคาย'],
				['พังงา', 'ยะลา', 'สงขลา', 'ภูเก็ต']]
var str = ''	
for (i in parts) {
	str += parts[i] + ': '
    str += provinces[i].join(', ')
    str += '\n'
}
console.log(str)