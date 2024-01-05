function age() {
                    let date = document.getElementById("date");
                    let month = document.getElementById("month");
                    let year = document.getElementById("year");
                    let total = document.getElementById("total");

                    const d = new Date()
                    let d2 = d.getDate();
                    let m2 = 1 + d.getMonth();
                    let y2 = d.getFullYear();
                    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                    if (date.value > d2) {
                                        d2 = d2 + months[m2 - 1];
                                        console.log(d2)
                                        m2 = m2 - 1;
                    }
                    if (month.value > m2) {
                                        m2 = m2 + 12;
                    }
                    // birth_date = d.getDate();
                    birth_year = d.getFullYear();
                    a = d2 - date.value;
                    b = m2 - month.value;
                    c = birth_year - year.value;
                    total.innerHTML = c + " years " + b + " months " + a + " days ";
}