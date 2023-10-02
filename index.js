//  bài 1 : TÍnh Lương Nhân Viên 

document.getElementById("btn_tinhLuong").onclick = function () {
    var luongNgay = Number(document.querySelector(".nhapipluong").value);
    var ngayLam = Number(document.querySelector(".nhapipngay").value);
    var luong = luongNgay * ngayLam
    document.querySelector(".inner_1").innerHTML = luong.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}

// bài 2 : Tính Trung Bình 5 số 

document.getElementById("btn-trungbinh").onclick = function () {
    var so1 = document.querySelector(".so1").value;
    var so2 = document.querySelector(".so2").value;
    var so3 = document.querySelector(".so3").value;
    var so4 = document.querySelector(".so4").value;
    var so5 = document.querySelector(".so5").value;
    if (so1.trim() === "" || so2.trim() === "" || so3.trim() === "" || so4.trim() === "" || so5.trim() === "") {
        alert("Nhập Thiếu Số.... Vui Lòng Nhập Lại")
    } else {
        var tb = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5;
        document.querySelector(".trungbinh").innerHTML = tb

    }

    // chỗ này xem lại kiểm tra KH đã nhập input chưa => chưa làm dc, note xem lại
}

//  Bài 3 : Quy Đổi USD

document.getElementById("btn-quydoi").onclick = () => {
    var usd = Number(document.querySelector(".usd").value);
    const tyGia = 23500;
    var giatri = usd * tyGia
    document.querySelector(".quydoi").innerHTML = giatri.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}

//bài 4 : Tính Chu Vi + S hình Chữ nhật

document.getElementById("btn-tinh").onclick = () => {
    var chieudai = Number(document.querySelector(".dai").value);
    var chieurong = Number(document.querySelector(".rong").value);
    if (chieudai < chieurong) {
        alert("chiều Dài đang nhỏ hơn Chiều Rộng")
    } else {
        var chuvi = (chieudai + chieurong) * 2;
        var dientich = chieudai * chieurong;
        document.querySelector(".tinhtoan").innerHTML = `Chu vi là : ${chuvi} & Diện Tích là ${dientich}`
    }
}

// bài 5 : Tính tổng 2 ký số 

document.getElementById("btn-2so").onclick = () => {
    var sonhap = Number(document.querySelector(".so_2chuso").value);
    if (sonhap < 10 || sonhap > 99) {
        alert("chỉ nhập số có 2 CHỮ SỐ")
    } else {
        var chuc = Math.floor(sonhap / 10);
        var dovi = sonhap % 10;
        var tong = chuc + dovi;
        document.querySelector(".tinhtoanngay").innerHTML = tong
    }
}
