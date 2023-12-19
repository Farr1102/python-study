function retainLastTenThousand(chineseNumber) {
  // 先删除前面的所有"万"
  const withoutWan = chineseNumber.replace(/[^万]*万/g, "");

  // 将最后一个"万"还原
  const lastIndex = withoutWan.lastIndexOf("万");
  const resultWan =
    withoutWan.slice(0, lastIndex) + "万" + withoutWan.slice(lastIndex + 1);

  const withoutYi = resultWan.replace(/[^亿]*亿/g, "");

  // 将最后一个"万"还原
  const lastIndexYi = withoutYi.lastIndexOf("亿");
  const result =
    withoutYi.slice(0, lastIndexYi) + "亿" + withoutYi.slice(lastIndexYi + 1);

  return result;
}

function numToString(num) {
  if (typeof num !== "number") return;
  const strArr = String(num).split("").reverse();
  const resArr = [];
  const danw = [
    "",
    "十",
    "百",
    "千",
    "万",
    "十万",
    "百万",
    "千万",
    "亿",
    "十亿",
    "百亿",
    "千亿",
  ];
  const numbers = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  strArr.forEach((item, index) => {
    if (item === "0") {
      resArr.push(numbers[item]);
    } else {
      resArr.push(numbers[item] + danw[index]);
    }
  });
  let str = resArr.reverse().join("");
  str = str.replace(/零+/g, "零");
  if (str.length > 1 && str[str.length - 1] === "零") {
    str = str.slice(0, -1);
    str = retainLastTenThousand(str);
  }
  return str;
}

const str = numToString(234242);
console.log(str);
