for (let year = 2020; year < 2031; year++) {
    if ((year % 4 == 0) && ((year % 100 != 0)) || (year % 400 == 0)) {
        document.write((year + " ").fontcolor("red"));
    } else {
        document.write(year + " ");
    }
}