
// Viết hàm để add các number vào Array để tính toán
var myArray = [];

function AddNumberToArray(arr,inputValue, newOfArray) {

    var NumberArray = Number(document.getElementById(inputValue).value);
    
    arr.push(NumberArray);
    document.getElementById(newOfArray).innerHTML = arr;
    
    return arr;
}

document.getElementById('BtnArray').onclick = function() {
    AddNumberToArray(myArray,'inputArray', 'newArray');
};

// Bai1

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến sum = 0 để cộng dồng tích lũy biến
    B3: Tạo vòng lặp for với điều kiện các phần tử trong mảng > 0 thì cộng dồn vào biến sum
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function TotalPositiveNumber() {
    var sum = 0;
    for ( var i = 0; i < myArray.length;i++) {
        if( myArray[i] > 0 ) {
            sum += myArray[i];
        }
    }
    document.getElementById('result1').innerHTML = "Tổng số dương: " + sum;
}
document.getElementById('btn1').onclick = TotalPositiveNumber;


// Bai2

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến đếm count = 0 để đếm số lượng các số dương
    B3: Tạo vòng lặp for với điều kiện lặp qua các phần tử trong mảng > 0 thì tăng thêm biến count 1 đơn vị
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function CountPositiveNumber() {
    var count = 0;
    for ( var i = 0; i < myArray.length;i++) {
        if (myArray[i] > 0) {
            count++;
        }
    }
    document.getElementById('result2').innerHTML = "Số dương: " + count;
}
document.getElementById('btn2').onclick = CountPositiveNumber;


// Bai3

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến min = phần tử đầu tiên trong mảng và dùng min để so sánh với các phần tử tiếp theo
    B3: Tạo vòng lặp for bắt đầu từ biến thứ 2 trở đi với điều kiện nếu phần tử min > i thì ta gán min = i, ngược lại min vẫn là biến 1 và so sánh với các phần tử tiếp theo
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function MinNumber() {
    var min = myArray[0]; 
    for ( var i = 1; i < myArray.length;i++) {
        if (min > myArray[i]) {
            min = myArray[i];
        }
    }
    document.getElementById('result3').innerHTML = "Số nhỏ nhất: " + min;
}
document.getElementById('btn3').onclick = MinNumber;


// bai4

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến newArray4, ta dùng filter với mảng ban đầu để lọc ra các phần tử > 0 và đưa vào biến newArray4
    B3: 
    - TH1: Trường hợp độ dài mảng newArray4 > 0 thì ta làm như bài 3 để tìm ra min 
    - TH2: Trường hợp độ dài mảng newArray4 = 0 là ko có phần tử nào thì ta in ra thông báo ko có số dương trong mảng
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function MinOfPositiveNumber() {
    var newArray4 = myArray.filter(function(item) {
        return item > 0;
    })
    if (newArray4.length > 0) {
        var min = newArray4[0]
        for (var i = 1; i < newArray4.length; i++) {
            if (min > newArray4[i]) {
                min = newArray4[i]
            }
        }
    } else {
        document.getElementById('result4').innerHTML = "Không có số dương trong mảng";
    }
    document.getElementById('result4').innerHTML = "Số dương nhỏ nhất: " + min;
}

document.getElementById('btn4').onclick = MinOfPositiveNumber;

// Bai5

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến newArray5, ta dùng filter với mảng ban đầu để lọc ra các phần tử chẵn là chia hết cho 2 và đưa vào biến newArray5
    B3: Tạo biến itemEven = newArray5[newArray5.length - 1] là phần tử chẵn cuối cùng trong mảng và in phần tử này ra thông báo
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function LastEvenNumber() {
    var newArray5 = myArray.filter(function(item) {
        if (item % 2 === 0) {
            return item;
        } 
    })
    var itemEven = newArray5[newArray5.length - 1];
    document.getElementById('result5').innerHTML = "Số chẵn cuối cùng: " + itemEven;
}
document.getElementById('btn5').onclick = LastEvenNumber;


// Bai6

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến input1 và input2, sau đó gán giá trị vị trí của 2 phần tử trong mảng vào 2 biến là value1, value2. Sau đó ta đảo ngược giá trị lại với nhau, value2 cho giá trị vị trí thứ nhất và value1 cho giá trị vị trí thứ hai
    B3: Thông báo kết quả ra giao diện bằng sự kiện click button và in ra mảng thay đổi mới
*/

function ChangePosition() {
    var input1Exercise6 = Number(document.getElementById('input1Bai6').value);
    var input2Exercise6 = Number(document.getElementById('input2Bai6').value);

    var valueSo1 = myArray[input1Exercise6];
    var valueSo2 = myArray[input2Exercise6];

    myArray[input1Exercise6] = valueSo2;
    myArray[input2Exercise6] = valueSo1;

    document.getElementById('result6').innerHTML = "Mảng sau khi đổi: " + myArray;
}
document.getElementById('btn6').onclick = ChangePosition;


// Bai7

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Sử dụng phương thức sort để sắp xếp tăng dần
    B3: Thông báo kết quả ra giao diện bằng sự kiện click button và in ra mảng thay đổi mới
*/

function toArrangeUp() {
    myArray.sort(function(a,b) {
        return a-b;
    })
    document.getElementById('result7').innerHTML = "Mảng sau khi sắp xếp: " + myArray;
}
document.getElementById('btn7').onclick = toArrangeUp;

// Bai8

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến checkSNT là true, tạo hàm checkPrimeNumber để check xem thử số có phải là nguyên tố hay ko, cho lặp qua vòng for chạy từ 2 tới căn bậc 2 của các phần tử mảng, nếu thỏa mãn ddkien số chia hết cho các số thì gán checkSNT = false, ngược lại trả về true
    B3: Tạo hàm isPrime và tạo vòng for chạy các phần tử trong mảng myArray
    - TH1: với các phần tử > 1 thì bỏ hàm checkPrimeNumber vào để check xem thử có phải là số nguyên tố hay ko, khi tìm đc số nguyên tố đầu tiên thì break dừng vòng lặp
    - TH2: Ngược lại thì in ra thông báo ko có số nguyên tố , = -1
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button
*/

function checkPrimeNumber(item) {
    var checkSNT = true;
    for ( var j = 2; j <= Math.sqrt(item); j++) {
        if (item % j === 0) {
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
}

function isPrime() {
    for (var i = 0;i < myArray.length;i++) {
        if (myArray[i] > 1) {
            var checkSo = checkPrimeNumber(myArray[i])
            if (checkSo) {
                document.getElementById('result8').innerHTML = myArray[i];
                break;
            }
        } else {
            document.getElementById('result8').innerHTML = "-1";
        }
    }
}

document.getElementById('btn8').onclick = isPrime;

// Bai9

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến myArray9 là mảng chứa các phần tử đc thêm vào, ta dùng lại hàm function add number vào array đc tạo ở đầu file
    B3: Dùng filter để lọc ra các phần tử số nguyên với điều kiện là trả về các phần tử số nguyên Number.isInteger
    B4: Thông báo kết quả ra giao diện bằng sự kiện click button và in ra kết quả với số lượng các số nguyên là length của mảng mới
*/

var myArray9 = [];

// Dùng lại hàm ở đầu file
document.getElementById('BtnForm9').onclick = function() {
    AddNumberToArray(myArray9,'input9', 'resultArray9');
};

function isIntegerNumber() {
    var newArray9 = myArray9.filter(function(item) {
        return Number.isInteger(item);
    })
    document.getElementById('result9').innerHTML = "Số nguyên: " + newArray9.length;
}

document.getElementById('btn9').onclick = isIntegerNumber;


// Bai10

/* 
    B1: Tạo UI giao diện (dùng BS)
    B2: Tạo biến NegativeNumber và PositiveNumber, ta dùng filter với mảng ban đầu để lọc ra các phần tử < 0 thì đưa vào biến NegativeNumber, còn các phần tử > 0 thì đưa vào biến PositiveNumber
    B3: Sau đó có 3 trường hợp ta so sánh độ dài length mảng với nhau
    - TH1: Nếu Negative.length lớn hơn thì số âm > sô dương
    - Th2: Nếu Negative.length bé hơn thì số âm < sô dương  
    - Th3: Nếu length bằng nhau thì số âm = số dương  
    B3: Thông báo kết quả ra giao diện bằng sự kiện click button và in ra kết quả
*/

function CompareAmountOfNumber() {
    var NegativeNumber = myArray.filter(function(item) {
        return item < 0;
    })
    var PositiveNumber = myArray.filter(function(item) {
        return item > 0;
    })
    if (NegativeNumber.length < PositiveNumber.length) {
        document.querySelector("#result10").innerHTML = "Số dương > Số âm" 
    } else if (NegativeNumber.length > PositiveNumber.length){
        document.querySelector("#result10").innerHTML = "Số dương < Số âm" 
    } else {
        document.querySelector("#result10").innerHTML = "Số dương = Số âm" 
    }
}

document.getElementById('btn10').onclick = CompareAmountOfNumber;
