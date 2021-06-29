var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("tinggi").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("berat").value);
	var umur = parseFloat(document.getElementById("usia").value)
	bmr = 66.47 + (13.75 * berat) + (5.003 * tinggi) - (6.755 * umur);
	bmi = berat / (tinggi * tinggi);

	if (bmi > 27) {
		keterangan = "Gemuk, Kelebihan berat badan tingkat berat";
	}else if ((bmi >= 25.1) & (bmi <= 27)){
		keterangan = "Gemuk, Kelebihan berat badan tingkat ringan";
	}else if ((bmi >= 18.5) & (bmi <= 25)){
		keterangan = "Normal";
	} else if ((bmi >= 17) & (bmi <= 18.4)){
		keterangan = "Kurus, Kekurangan berat badan tingkat ringan";
	}else {
		keterangan = "Kurus, Kekurangan berat badan tingkat berat";
	}
	document.getElementById('bmr').innerHTML = "Hasil perhitungan BMR : " + bmr.toFixed(1);
	document.getElementById('bmi').innerHTML = "Hasil perhitungan BMI : " + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}
