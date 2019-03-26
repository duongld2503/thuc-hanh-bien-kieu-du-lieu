let diemVatLy;
let diemHoaHoc;
let diemToan;

diemVatLy = prompt("nhap gia tri diem Vat Ly :");
diemHoaHoc = prompt("nhap gia tri diem Hoa hoc :");
diemToan = prompt("nhap gia tri diem Toan :");

let trungBinhDiem;

trungBinhDiem = (diemToan+diemHoaHoc+diemVatLy)/3;

alert("diem trung binh 3 mon la : " + trungBinhDiem);