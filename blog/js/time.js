function show_runtime() {
    window.setTimeout("show_runtime()", 1000);
    X = new

    Date("1/30/2022 23:47:48");

    Y = new Date();
    T = (Y.getTime() - X.getTime());
    M = 24 * 60 * 60 * 1000;

    a = T / M;
    A = Math.floor(a);
    b = (a - A) * 24;
    B = Math.floor(b);
    c = (b - B) * 60;
    C = Math.floor((b - B) * 60);
    D = Math.floor((c - C) * 60);

    runtime_span.innerHTML = "本站已运行: " + A + "天" + B + "小时" + C + "分" + D + "秒"
}
show_runtime();