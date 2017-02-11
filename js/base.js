//下拉菜单初始化
$('.dropdown-button').dropdown({
    hover: true,
    belowOrigin: true
});
<!-- 折叠导航初始化 -->
$(".button-collapse").sideNav({
    edge: 'right'
});
$('.modal').modal();
(function () {
    //DOM对象
    var DOM = {
        window: $(window),
        document: $(document),
        body: $('body'),
        thead: $('thead'),
        tbody: $('tbody'),
        pagination: $('.pagination'),
        rows_total: $('#rows_total'),
        data_total: $('#data_total'),
        modal: $('.modal'),
        alert_box: $('#alert_box'),
        alert_box_mask: $('#alert_box_mask')
    };
    //方便在本地打开查看页面效果，所以把json文件内容放到js文件内，实际运用中使用$.get()请求json文件即可
    var data = [
        ["变量0", "变量1", "变量2", "变量3", "变量4", "变量5", "变量6", "变量7", "变量8", "变量9", "变量10", "变量11", "变量12", "变量13"],
        [11.03, 1.51, 2.2, 21.5, 85, 2.46, 2.17, 0.52, 2.01, 1.9, 1.71, 2.87, 407, "Rework"],
        [11.41, 0.74, 2.5, 21, 88, 2.48, 2.01, 0.42, 1.44, 3.08, 1.1, 2.31, 434, "Rework"],
        [11.45, 2.4, 2.42, 20, 96, 2.9, 2.79, 0.32, 1.83, 3.25, 0.8, 3.39, 625, "Rework"],
        [11.46, 3.74, 1.82, 19.5, 107, 3.18, 2.58, 0.24, 3.58, 2.9, 0.75, 2.81, 562, "Rework"],
        [11.56, 2.05, 3.23, 28.5, 119, 3.18, 5.08, 0.47, 1.87, 6, 0.93, 3.69, 465, "Rework"],
        [11.61, 1.35, 2.7, 20, 94, 2.74, 2.92, 0.29, 2.49, 2.65, 0.96, 3.26, 680, "Rework"],
        [11.62, 1.99, 2.28, 18, 98, 3.02, 2.26, 0.17, 1.35, 3.25, 1.16, 2.96, 345, "Rework"],
        [11.64, 2.06, 2.46, 21.6, 84, 1.95, 1.69, 0.48, 1.35, 2.8, 1, 2.75, 680, "Rework"],
        [11.65, 1.67, 2.62, 26, 88, 1.92, 1.61, 0.4, 1.34, 2.6, 1.36, 3.21, 562, "Rework"],
        [11.66, 1.88, 1.92, 16, 97, 1.61, 1.57, 0.34, 1.15, 3.8, 1.23, 2.14, 428, "Rework"],
        [11.76, 2.68, 2.92, 20, 103, 1.75, 2.03, 0.6, 1.05, 3.8, 1.23, 2.5, 607, "Rework"],
        [11.79, 2.13, 2.78, 28.5, 92, 2.13, 2.24, 0.58, 1.76, 3, 0.97, 2.44, 466, "Rework"],
        [11.81, 2.12, 2.74, 21.5, 134, 1.6, 0.99, 0.14, 1.56, 2.5, 0.95, 2.26, 625, "Rework"],
        [11.82, 1.47, 1.99, 20.8, 86, 1.98, 1.6, 0.3, 1.53, 1.95, 0.95, 3.33, 495, "Rework"],
        [11.82, 1.72, 1.88, 19.5, 86, 2.5, 1.64, 0.37, 1.42, 2.06, 0.94, 2.44, 415, "Rework"],
        [11.84, 0.89, 2.58, 18, 94, 2.2, 2.21, 0.22, 2.35, 3.05, 0.79, 3.08, 520, "Rework"],
        [11.84, 2.89, 2.23, 18, 112, 1.72, 1.32, 0.43, 0.95, 2.65, 0.96, 2.52, 500, "Rework"],
        [11.87, 4.31, 2.39, 21, 82, 2.86, 3.03, 0.21, 2.91, 2.8, 0.75, 3.64, 380, "Rework"],
        [11.96, 1.09, 2.3, 21, 101, 3.38, 2.14, 0.13, 1.65, 3.21, 0.99, 3.13, 886, "Rework"],
        [12, 0.92, 2, 19, 86, 2.42, 2.26, 0.3, 1.43, 2.5, 1.38, 3.12, 278, "Rework"],
        [12, 1.51, 2.42, 22, 86, 1.45, 1.25, 0.5, 1.63, 3.6, 1.05, 2.65, 450, "Rework"],
        [12, 3.43, 2, 19, 87, 2, 1.64, 0.37, 1.87, 1.28, 0.93, 3.05, 564, "Rework"],
        [12.04, 4.3, 2.38, 22, 80, 2.1, 1.75, 0.42, 1.35, 2.6, 0.79, 2.57, 580, "Rework"],
        [12.07, 2.16, 2.17, 21, 85, 2.6, 2.65, 0.37, 1.35, 2.76, 0.86, 3.28, 378, "Rework"],
        [12.08, 1.13, 2.51, 24, 78, 2, 1.58, 0.4, 1.4, 2.2, 1.31, 2.72, 630, "Rework"],
        [12.08, 1.33, 2.3, 23.6, 70, 2.2, 1.59, 0.42, 1.38, 1.74, 1.07, 3.21, 625, "Rework"],
        [12.08, 1.39, 2.5, 22.5, 84, 2.56, 2.29, 0.43, 1.04, 2.9, 0.93, 3.19, 385, "Rework"],
        [12.08, 1.83, 2.32, 18.5, 81, 1.6, 1.5, 0.52, 1.64, 2.4, 1.08, 2.27, 480, "Rework"],
        [12.08, 2.08, 1.7, 17.5, 97, 2.23, 2.17, 0.26, 1.4, 3.3, 1.27, 2.96, 710, "Rework"],
        [12.16, 1.61, 2.31, 22.8, 90, 1.78, 1.69, 0.43, 1.56, 2.45, 1.33, 2.26, 495, "Rework"],
        [12.17, 1.45, 2.53, 19, 104, 1.89, 1.75, 0.45, 1.03, 2.95, 1.45, 2.23, 355, "Rework"],
        [12.2, 3.03, 2.32, 19, 96, 1.25, 0.49, 0.4, 0.73, 5.5, 0.66, 1.83, 510, "Scrap"],
        [12.21, 1.19, 1.75, 16.8, 151, 1.85, 1.28, 0.14, 2.5, 2.85, 1.28, 3.07, 718, "Rework"],
        [12.22, 1.29, 1.94, 19, 92, 2.36, 2.04, 0.39, 2.08, 2.7, 0.86, 3.02, 312, "Rework"],
        [12.25, 1.73, 2.12, 19, 80, 1.65, 2.03, 0.37, 1.63, 3.4, 1, 3.17, 510, "Rework"],
        [12.25, 3.88, 2.2, 18.5, 112, 1.38, 0.78, 0.29, 1.14, 8.21, 0.65, 2, 855, "Scrap"],
        [12.25, 4.72, 2.54, 21, 89, 1.38, 0.47, 0.53, 0.8, 3.85, 0.75, 1.27, 720, "Scrap"],
        [12.29, 1.41, 1.98, 16, 85, 2.55, 2.5, 0.29, 1.77, 2.9, 1.23, 2.74, 428, "Rework"],
        [12.29, 1.61, 2.21, 20.4, 103, 1.1, 1.02, 0.37, 1.46, 3.05, 0.906, 1.82, 870, "Rework"],
        [12.29, 2.83, 2.22, 18, 88, 2.45, 2.25, 0.25, 1.99, 2.15, 1.15, 3.3, 290, "Rework"],
        [12.29, 3.17, 2.21, 18, 88, 2.85, 2.99, 0.45, 2.81, 2.3, 1.42, 2.83, 406, "Rework"],
        [12.33, 0.99, 1.95, 14.8, 136, 1.9, 1.85, 0.35, 2.76, 3.4, 1.06, 2.31, 750, "Rework"],
        [12.33, 1.1, 2.28, 16, 101, 2.05, 1.09, 0.63, 0.41, 3.27, 1.25, 1.67, 680, "Rework"],
        [12.34, 2.45, 2.46, 21, 98, 2.56, 2.11, 0.34, 1.31, 2.8, 0.8, 3.38, 438, "Rework"],
        [12.36, 3.83, 2.38, 21, 88, 2.3, 0.92, 0.5, 1.04, 7.65, 0.56, 1.58, 520, "Scrap"],
        [12.37, 0.94, 1.36, 10.6, 88, 1.98, 0.57, 0.28, 0.42, 1.95, 1.05, 1.82, 520, "Rework"],
        [12.37, 1.07, 2.1, 18.5, 88, 3.52, 3.75, 0.24, 1.95, 4.5, 1.04, 2.77, 660, "Rework"],
        [12.37, 1.13, 2.16, 19, 87, 3.5, 3.1, 0.19, 1.87, 4.45, 1.22, 2.87, 420, "Rework"],
        [12.37, 1.17, 1.92, 19.6, 78, 2.11, 2, 0.27, 1.04, 4.68, 1.12, 3.48, 510, "Rework"],
        [12.37, 1.21, 2.56, 18.1, 98, 2.42, 2.65, 0.37, 2.08, 4.6, 1.19, 2.3, 678, "Rework"],
        [12.37, 1.63, 2.3, 24.5, 88, 2.22, 2.45, 0.4, 1.9, 2.12, 0.89, 2.78, 342, "Rework"],
        [12.42, 1.61, 2.19, 22.5, 108, 2, 2.09, 0.34, 1.61, 2.06, 1.06, 2.96, 345, "Rework"],
        [12.42, 2.55, 2.27, 22, 90, 1.68, 1.84, 0.66, 1.42, 2.7, 0.86, 3.3, 315, "Rework"],
        [12.42, 4.43, 2.73, 26.5, 102, 2.2, 2.13, 0.43, 1.71, 2.08, 0.92, 3.12, 365, "Rework"],
        [12.43, 1.53, 2.29, 21.5, 86, 2.74, 3.15, 0.39, 1.77, 3.94, 0.69, 2.84, 352, "Rework"],
        [12.45, 3.03, 2.64, 27, 97, 1.9, 0.58, 0.63, 1.14, 7.5, 0.67, 1.73, 880, "Scrap"],
        [12.47, 1.52, 2.2, 19, 162, 2.5, 2.27, 0.32, 3.28, 2.6, 1.16, 2.63, 937, "Rework"],
        [12.51, 1.24, 2.25, 17.5, 85, 2, 0.58, 0.6, 1.25, 5.45, 0.75, 1.51, 650, "Scrap"],
        [12.51, 1.73, 1.98, 20.5, 85, 2.2, 1.92, 0.32, 1.48, 2.94, 1.04, 3.57, 672, "Rework"],
        [12.52, 2.43, 2.17, 21, 88, 2.55, 2.27, 0.26, 1.22, 2, 0.9, 2.78, 325, "Rework"],
        [12.53, 5.51, 2.64, 25, 96, 1.79, 0.6, 0.63, 1.1, 5, 0.82, 1.69, 515, "Scrap"],
        [12.58, 1.29, 2.1, 20, 103, 1.48, 0.58, 0.53, 1.4, 7.6, 0.58, 1.55, 640, "Scrap"],
        [12.6, 1.34, 1.9, 18.5, 88, 1.45, 1.36, 0.29, 1.35, 2.45, 1.04, 2.77, 562, "Rework"],
        [12.6, 2.46, 2.2, 18.5, 94, 1.62, 0.66, 0.63, 0.94, 7.1, 0.73, 1.58, 695, "Scrap"],
        [12.64, 1.36, 2.02, 16.8, 100, 2.02, 1.41, 0.53, 0.62, 5.75, 0.98, 1.59, 450, "Rework"],
        [12.67, 0.98, 2.24, 18, 99, 2.2, 1.94, 0.3, 1.46, 2.62, 1.23, 3.16, 450, "Rework"],
        [12.69, 1.53, 2.26, 20.7, 80, 1.38, 1.46, 0.58, 1.62, 3.05, 0.96, 2.06, 495, "Rework"],
        [12.7, 3.55, 2.36, 21.5, 106, 1.7, 1.2, 0.17, 0.84, 5, 0.78, 1.29, 600, "Scrap"],
        [12.7, 3.87, 2.4, 23, 101, 2.83, 2.55, 0.43, 1.95, 2.57, 1.19, 3.13, 463, "Rework"],
        [12.72, 1.75, 2.28, 22.5, 84, 1.38, 1.76, 0.48, 1.63, 3.3, 0.88, 2.42, 488, "Rework"],
        [12.72, 1.81, 2.2, 18.8, 86, 2.2, 2.53, 0.26, 1.77, 3.9, 1.16, 3.14, 714, "Rework"],
        [12.77, 2.39, 2.28, 19.5, 86, 1.39, 0.51, 0.48, 0.64, 9.899999, 0.57, 1.63, 470, "Scrap"],
        [12.77, 3.43, 1.98, 16, 80, 1.63, 1.25, 0.43, 0.83, 3.4, 0.7, 2.12, 372, "Rework"],
        [12.79, 2.67, 2.48, 22, 112, 1.48, 1.36, 0.24, 1.26, 10.8, 0.48, 1.47, 480, "Scrap"],
        [12.81, 2.31, 2.4, 24, 98, 1.15, 1.09, 0.27, 0.83, 5.7, 0.66, 1.36, 560, "Scrap"],
        [12.82, 3.37, 2.3, 19.5, 88, 1.48, 0.66, 0.4, 0.97, 10.26, 0.72, 1.75, 685, "Scrap"],
        [12.84, 2.96, 2.61, 24, 101, 2.32, 0.6, 0.53, 0.81, 4.92, 0.89, 2.15, 590, "Scrap"],
        [12.85, 1.6, 2.52, 17.8, 95, 2.48, 2.37, 0.26, 1.46, 3.93, 1.09, 3.63, 1015, "Good"],
        [12.85, 3.27, 2.58, 22, 106, 1.65, 0.6, 0.6, 0.96, 5.58, 0.87, 2.11, 570, "Scrap"],
        [12.86, 1.35, 2.32, 18, 122, 1.51, 1.25, 0.21, 0.94, 4.1, 0.76, 1.29, 630, "Scrap"],
        [12.87, 4.61, 2.48, 21.5, 86, 1.7, 0.65, 0.47, 0.86, 7.65, 0.54, 1.86, 625, "Scrap"],
        [12.88, 2.99, 2.4, 20, 104, 1.3, 1.22, 0.24, 0.83, 5.4, 0.74, 1.42, 530, "Scrap"],
        [12.93, 2.81, 2.7, 21, 96, 1.54, 0.5, 0.53, 0.75, 4.6, 0.77, 2.31, 600, "Scrap"],
        [12.93, 3.8, 2.65, 18.6, 102, 2.41, 2.41, 0.25, 1.98, 4.5, 1.03, 3.52, 770, "Good"],
        [12.96, 3.45, 2.35, 18.5, 106, 1.39, 0.7, 0.4, 0.94, 5.28, 0.68, 1.75, 675, "Scrap"],
        [12.99, 1.67, 2.6, 30, 139, 3.3, 2.89, 0.21, 1.96, 3.35, 1.31, 3.5, 985, "Rework"],
        [13.03, 0.9, 1.71, 16, 86, 1.95, 2.03, 0.24, 1.46, 4.6, 1.19, 2.48, 392, "Rework"],
        [13.05, 1.65, 2.55, 18, 98, 2.45, 2.43, 0.29, 1.44, 4.25, 1.12, 2.51, 1105, "Good"],
        [13.05, 1.73, 2.04, 12.4, 92, 2.72, 3.27, 0.17, 2.91, 7.2, 1.12, 2.91, 1150, "Good"],
        [13.05, 1.77, 2.1, 17, 107, 3, 3, 0.28, 2.03, 5.04, 0.88, 3.35, 885, "Good"],
        [13.05, 2.05, 3.22, 25, 124, 2.63, 2.68, 0.47, 1.92, 3.58, 1.13, 3.2, 830, "Good"],
        [13.05, 3.86, 2.32, 22.5, 85, 1.65, 1.59, 0.61, 1.62, 4.8, 0.84, 2.01, 515, "Rework"],
        [13.05, 5.8, 2.13, 21.5, 86, 2.62, 2.65, 0.3, 2.01, 2.6, 0.73, 3.1, 380, "Rework"],
        [13.07, 1.5, 2.1, 15.5, 98, 2.4, 2.64, 0.28, 1.37, 3.7, 1.18, 2.69, 1020, "Good"],
        [13.08, 3.9, 2.36, 21.5, 113, 1.41, 1.39, 0.34, 1.14, 9.4, 0.57, 1.33, 550, "Scrap"],
        [13.11, 1.01, 1.7, 15, 78, 2.98, 3.18, 0.26, 2.28, 5.3, 1.12, 3.18, 502, "Rework"],
        [13.11, 1.9, 2.75, 25.5, 116, 2.2, 1.28, 0.26, 1.56, 7.1, 0.61, 1.33, 425, "Scrap"],
        [13.16, 2.36, 2.67, 18.6, 101, 2.8, 3.24, 0.3, 2.81, 5.68, 1.03, 3.17, 1185, "Good"],
        [13.16, 3.57, 2.15, 21, 102, 1.5, 0.55, 0.43, 1.3, 4, 0.6, 1.68, 830, "Scrap"],
        [13.17, 2.59, 2.37, 20, 120, 1.65, 0.68, 0.53, 1.46, 9.3, 0.6, 1.62, 840, "Scrap"],
        [13.17, 5.19, 2.32, 22, 93, 1.74, 0.63, 0.61, 1.55, 7.9, 0.6, 1.48, 725, "Scrap"],
        [13.2, 1.78, 2.14, 11.2, 100, 2.65, 2.76, 0.26, 1.28, 4.38, 1.05, 3.4, 1050, "Good"],
        [13.23, 3.3, 2.28, 18.5, 98, 1.8, 0.83, 0.61, 1.87, 10.52, 0.56, 1.51, 675, "Scrap"],
        [13.24, 2.59, 2.87, 21, 118, 2.8, 2.69, 0.39, 1.82, 4.32, 1.04, 2.93, 735, "Good"],
        [13.24, 3.98, 2.29, 17.5, 103, 2.64, 2.63, 0.32, 1.66, 4.36, 0.82, 3, 680, "Good"],
        [13.27, 4.28, 2.26, 20, 120, 1.59, 0.69, 0.43, 1.35, 10.2, 0.59, 1.56, 835, "Scrap"],
        [13.28, 1.64, 2.84, 15.5, 110, 2.6, 2.68, 0.34, 1.36, 4.6, 1.09, 2.78, 880, "Good"],
        [13.29, 1.97, 2.68, 16.8, 102, 3, 3.23, 0.31, 1.66, 6, 1.07, 2.84, 1270, "Good"],
        [13.3, 1.72, 2.14, 17, 94, 2.4, 2.19, 0.27, 1.35, 3.95, 1.02, 2.77, 1285, "Good"],
        [13.32, 3.24, 2.38, 21.5, 92, 1.93, 0.76, 0.45, 1.25, 8.42, 0.55, 1.62, 650, "Scrap"],
        [13.34, 0.94, 2.36, 17, 110, 2.53, 1.3, 0.55, 0.42, 3.17, 1.02, 1.93, 750, "Rework"],
        [13.36, 2.56, 2.35, 20, 89, 1.4, 0.5, 0.37, 0.64, 5.6, 0.7, 2.47, 780, "Scrap"],
        [13.39, 1.77, 2.62, 16.1, 93, 2.85, 2.94, 0.34, 1.45, 4.8, 0.92, 3.22, 1195, "Good"],
        [13.4, 3.91, 2.48, 23, 102, 1.8, 0.75, 0.43, 1.41, 7.3, 0.7, 1.56, 750, "Scrap"],
        [13.4, 4.6, 2.86, 25, 112, 1.98, 0.96, 0.27, 1.11, 8.5, 0.67, 1.92, 630, "Scrap"], [
            13.41,
            3.84,
            2.12,
            18.8,
            90,
            2.45,
            2.68,
            0.27,
            1.48,
            4.28,
            0.91,
            3,
            1035,
            "Good"
        ],
        [13.45, 3.7, 2.6, 23, 111, 1.7, 0.92, 0.43, 1.46, 10.68, 0.85, 1.56, 695, "Scrap"],
        [13.48, 1.67, 2.64, 22.5, 89, 2.6, 1.1, 0.52, 2.29, 11.75, 0.57, 1.78, 620, "Scrap"],
        [13.48, 1.81, 2.41, 20.5, 100, 2.7, 2.98, 0.26, 1.86, 5.1, 1.04, 3.47, 920, "Good"],
        [13.49, 1.66, 2.24, 24, 87, 1.88, 1.84, 0.27, 1.03, 3.74, 0.98, 2.78, 472, "Rework"],
        [13.49, 3.59, 2.19, 19.5, 88, 1.62, 0.48, 0.58, 0.88, 5.7, 0.81, 1.82, 580, "Scrap"],
        [13.5, 1.81, 2.61, 20, 96, 2.53, 2.61, 0.28, 1.66, 3.52, 1.12, 3.82, 845, "Good"],
        [13.5, 3.12, 2.62, 24, 123, 1.4, 1.57, 0.22, 1.25, 8.6, 0.59, 1.3, 500, "Scrap"],
        [13.51, 1.8, 2.65, 19, 110, 2.35, 2.53, 0.29, 1.54, 4.2, 1.1, 2.87, 1095, "Good"],
        [13.52, 3.17, 2.72, 23.5, 97, 1.55, 0.52, 0.5, 0.55, 4.35, 0.89, 2.06, 520, "Scrap"],
        [13.56, 1.71, 2.31, 16.2, 117, 3.15, 3.29, 0.34, 2.34, 6.13, 0.95, 3.38, 795, "Good"],
        [13.56, 1.73, 2.46, 20.5, 116, 2.96, 2.78, 0.2, 2.45, 6.25, 0.98, 3.03, 1120, "Good"],
        [13.58, 1.66, 2.36, 19.1, 106, 2.86, 3.19, 0.22, 1.95, 6.9, 1.09, 2.88, 1515, "Good"],
        [13.58, 2.58, 2.69, 24.5, 105, 1.55, 0.84, 0.39, 1.54, 8.66, 0.74, 1.8, 750, "Scrap"],
        [13.62, 4.95, 2.35, 20, 92, 2, 0.8, 0.47, 1.02, 4.4, 0.91, 2.05, 550, "Scrap"],
        [13.63, 1.81, 2.7, 17.2, 112, 2.85, 2.91, 0.3, 1.46, 7.3, 1.28, 2.88, 1310, "Good"],
        [13.64, 3.1, 2.56, 15.2, 116, 2.7, 3.03, 0.17, 1.66, 5.1, 0.96, 3.36, 845, "Good"],
        [13.67, 1.25, 1.92, 18, 94, 2.1, 1.79, 0.32, 0.73, 3.8, 1.23, 2.46, 630, "Rework"],
        [13.68, 1.83, 2.36, 17.2, 104, 2.42, 2.69, 0.42, 1.97, 3.84, 1.23, 2.87, 990, "Good"],
        [13.69, 3.26, 2.54, 20, 107, 1.83, 0.56, 0.5, 0.8, 5.88, 0.96, 1.82, 680, "Scrap"],
        [13.71, 1.86, 2.36, 16.6, 101, 2.61, 2.88, 0.27, 1.69, 3.8, 1.11, 4, 1035, "Good"],
        [13.71, 5.65, 2.45, 20.5, 95, 1.68, 0.61, 0.52, 1.06, 7.7, 0.64, 1.74, 740, "Scrap"],
        [13.72, 1.43, 2.5, 16.7, 108, 3.4, 3.67, 0.19, 2.04, 6.8, 0.89, 2.87, 1285, "Good"],
        [13.73, 1.5, 2.7, 22.5, 101, 3, 3.25, 0.29, 2.38, 5.7, 1.19, 2.71, 1285, "Good"],
        [13.73, 4.36, 2.26, 22.5, 88, 1.28, 0.47, 0.52, 1.15, 6.62, 0.78, 1.75, 520, "Scrap"],
        [13.74, 1.67, 2.25, 16.4, 118, 2.6, 2.9, 0.21, 1.62, 5.85, 0.92, 3.2, 1060, "Good"],
        [13.75, 1.73, 2.41, 16, 89, 2.6, 2.76, 0.29, 1.81, 5.6, 1.15, 2.9, 1320, "Good"],
        [13.76, 1.53, 2.7, 19.5, 132, 2.95, 2.74, 0.5, 1.35, 5.4, 1.25, 3, 1235, "Good"],
        [13.77, 1.9, 2.68, 17.1, 115, 3, 2.79, 0.39, 1.68, 6.3, 1.13, 2.93, 1375, "Good"],
        [13.78, 2.76, 2.3, 22, 90, 1.35, 0.68, 0.41, 1.03, 9.58, 0.7, 1.68, 615, "Scrap"],
        [13.82, 1.75, 2.42, 14, 111, 3.88, 3.74, 0.32, 1.87, 7.05, 1.01, 3.26, 1190, "Good"],
        [13.83, 1.57, 2.62, 20, 115, 2.95, 3.4, 0.4, 1.72, 6.6, 1.13, 2.57, 1130, "Good"],
        [13.83, 1.65, 2.6, 17.2, 94, 2.45, 2.99, 0.22, 2.29, 5.6, 1.24, 3.37, 1265, "Good"],
        [13.84, 4.12, 2.38, 19.5, 89, 1.8, 0.83, 0.48, 1.56, 9.01, 0.57, 1.64, 480, "Scrap"],
        [13.86, 1.35, 2.27, 16, 98, 2.98, 3.15, 0.22, 1.85, 7.22, 1.01, 3.55, 1045, "Good"],
        [13.86, 1.51, 2.67, 25, 86, 2.95, 2.86, 0.21, 1.87, 3.38, 1.36, 3.16, 410, "Rework"],
        [13.87, 1.9, 2.8, 19.4, 107, 2.95, 2.97, 0.37, 1.76, 4.5, 1.25, 3.4, 915, "Good"],
        [13.88, 1.89, 2.59, 15, 101, 3.25, 3.56, 0.17, 1.7, 5.43, 0.88, 3.56, 1095, "Good"],
        [13.88, 5.04, 2.23, 20, 80, 0.98, 0.34, 0.4, 0.68, 4.9, 0.58, 1.33, 415, "Scrap"],
        [13.9, 1.68, 2.12, 16, 101, 3.1, 3.39, 0.21, 2.14, 6.1, 0.91, 3.33, 985, "Good"],
        [13.94, 1.73, 2.27, 17.4, 108, 2.88, 3.54, 0.32, 2.08, 8.9, 1.12, 3.1, 1260, "Good"],
        [14.02, 1.68, 2.21, 16, 96, 2.65, 2.33, 0.26, 1.98, 4.7, 1.04, 3.59, 1035, "Good"],
        [14.06, 1.63, 2.28, 16, 126, 3, 3.17, 0.24, 2.1, 5.65, 1.09, 3.71, 780, "Good"],
        [14.06, 2.15, 2.61, 17.6, 121, 2.6, 2.51, 0.31, 1.25, 5.05, 1.06, 3.58, 1295, "Good"],
        [14.1, 2.02, 2.4, 18.8, 103, 2.75, 2.92, 0.32, 2.38, 6.2, 1.07, 2.75, 1060, "Good"],
        [14.1, 2.16, 2.3, 18, 105, 2.95, 3.32, 0.22, 2.38, 5.75, 1.25, 3.17, 1510, "Good"],
        [14.12, 1.48, 2.32, 16.8, 95, 2.2, 2.43, 0.26, 1.57, 5, 1.17, 2.82, 1280, "Good"],
        [14.13, 4.1, 2.74, 24.5, 96, 2.05, 0.76, 0.56, 1.35, 9.2, 0.61, 1.6, 560, "Scrap"],
        [14.16, 2.51, 2.48, 20, 91, 1.68, 0.7, 0.44, 1.24, 9.7, 0.62, 1.71, 660, "Scrap"],
        [14.19, 1.59, 2.48, 16.5, 108, 3.3, 3.93, 0.32, 1.86, 8.7, 1.23, 2.82, 1680, "Good"],
        [14.2, 1.76, 2.45, 15.2, 112, 3.27, 3.39, 0.34, 1.97, 6.75, 1.05, 2.85, 1450, "Good"],
        [14.21, 4.04, 2.44, 18.9, 111, 2.85, 2.65, 0.3, 1.25, 5.24, 0.87, 3.33, 1080, "Good"],
        [14.22, 1.7, 2.3, 16.3, 118, 3.2, 3, 0.26, 2.03, 6.38, 0.94, 3.31, 970, "Good"],
        [14.22, 3.99, 2.51, 13.2, 128, 3, 3.04, 0.2, 2.08, 5.1, 0.89, 3.53, 760, "Good"],
        [14.23, 1.71, 2.43, 15.6, 127, 2.8, 3.06, 0.28, 2.29, 5.64, 1.04, 3.92, 1065, "Good"],
        [14.3, 1.92, 2.72, 20, 120, 2.8, 3.14, 0.33, 1.97, 6.2, 1.07, 2.65, 1280, "Good"],
        [14.34, 1.68, 2.7, 25, 98, 2.8, 1.31, 0.53, 2.7, 13, 0.57, 1.96, 660, "Scrap"],
        [14.37, 1.95, 2.5, 16.8, 113, 3.85, 3.49, 0.24, 2.18, 7.8, 0.86, 3.45, 1480, "Good"],
        [14.38, 1.87, 2.38, 12, 102, 3.3, 3.64, 0.29, 2.96, 7.5, 1.2, 3, 1547, "Good"],
        [14.38, 3.59, 2.28, 16, 102, 3.25, 3.17, 0.27, 2.19, 4.9, 1.04, 3.44, 1065, "Good"],
        [14.39, 1.87, 2.45, 14.6, 96, 2.5, 2.52, 0.3, 1.98, 5.25, 1.02, 3.58, 1290, "Good"],
        [14.75, 1.73, 2.39, 11.4, 91, 3.1, 3.69, 0.43, 2.81, 5.4, 1.25, 2.73, 1150, "Good"],
        [14.83, 1.64, 2.17, 14, 97, 2.8, 2.98, 0.29, 1.98, 5.2, 1.08, 2.85, 1045, "Good"]
    ];
    var currentPage = 1
        , pages
        , rows
        , rowNum
        , startNum = 1  //分页导航起始页
        , total = 0       //记录数据数
        ;
    if (DOM.window.height() < 600) {
        rowNum = 3;
    } else if (DOM.window.height() > 1000) {
        rowNum = 15;
    } else {
        rowNum = 10;
    }
    //分页,设置每页行数
    init();
    //屏幕高度低于600时，每页显示6行
    //屏幕高度高于1000，每页显示13行
    $(window).on('resize', function () {
        var $this = $(this);
        if ($this.height() < 600) {
            rowNum = 3;
            refreshPage();
        } else if ($this.height() > 1000) {
            rowNum = 15;
            refreshPage();
        } else {
            rowNum = 10;
            refreshPage();
        }
    });
    function init() {
        //初始化页面，并计算需要多少页
        // $.get('data/test.json', function (data) {
            //计算行数去掉表头部分
            rows = data.length - 1;
            pages = Math.ceil(rows / rowNum);
            // console.log('pages',pages);
            //填充总行数，排除表头
            DOM.rows_total.html(rows);
            //填充总记录数,从一开始计算
            for (var j = 1; j < data.length; j++) {
                var item = data[j];
                for (var k = 0; k < item.length; k++) {
                    total++;
                }
            }
            DOM.data_total.html(total);
            //绘制表头
            drawThead(data[0]);
            $('.modal').modal();
            //绘制表体
            drawTbody(1);
            //绘制分页导航，给每个页码绑定点击事件
            drawPagination();
        // });
    }

    function drawThead(thead) {
        var tr = $('<tr class="white-text"></tr>');
        for (var i = 0; i < thead.length; i++) {
            var $th = $('<th class="grey darken-2"><span>' + thead[i] + '</span></th>');
            var $dropDown = $('<a class="dropdown-button" href="#" data-activates="dropdown_th_' + i +
                '">' + thead[i] + '<i class="material-icons right">arrow_drop_down</i></a>');
            // console.log('th',th);
            $dropDown.hide();
            $th.css('cursor', 'pointer');
            // 每个表头项添加一个点击事件，触发后替换为一个下拉框
            $th.on('click', function (e) {
                //阻止事件冒泡
                e.stopPropagation();
                var $this = $(this);
                $this.find('span').hide();
                $this.find('.dropdown-button').show();
            });
            //鼠标离开表头时，替换完之前的表头
            $th.on('mouseleave', function () {
                // console.log('mouseleave');
                var $this = $(this);
                $this.find('.dropdown-button').hide();
                $this.find('span').show();
            });
            $th.append($dropDown);
            var $dropDownMenu = $(
                '<ul id="dropdown_th_' + i + '" class="dropdown-content">' +
                '<li><a href="#">删除列</a></li>' +
                (i % 2 === 0 ? '' : ('<li><a class="modal_btn" href=#modal' + i + ' data-index="' + i + '">离散化</a></li></ul>' +
                '<div id="modal' + i + '" class="modal">' +
                '<div class="row grey darken-2 white-text valign-wrapper modal-title"><h5 class="col s6">数据离散化(' + thead[i] + ')</h5>' +
                '<div class="col s6 valign"><i class="modal-action modal-close material-icons right">close</i></div></div>' +
                '<div class="modal-content">' +
                '<div class="col s12"><select class="browser-default"><option value="1">离散化方法</option><option value="2">其他</option></select></div>' +
                '<div class="row valign-wrapper"><div class="col s2 valign">分箱数：</div><div class="input-field col s7"><input data-boxindex="' + i + '" class="box_num" type="number" value="2"></div>' +
                '<a class="btn tooltipped col s2 offset-s1 center-align valign refresh" data-position="top" data-delay="50" data-tooltip="更新分箱数据"><i class="material-icons left">refresh</i>刷新</a></div>' +
                '<div id="bar' + i + '" class="bar"></div></div>' +
                '<div class="row grey darken-2 modal-footer"><a href="#" class="modal-action modal-close waves-effect waves-green col s6 center-align">确认</a>' +
                '<a href="#" class="modal-action modal-close waves-effect waves-red col s6 center-align">取消</a>' +
                '</div>' +
                '</div>'))
            );
            tr.append($th);
            $dropDownMenu.find('.modal_btn').on('click', function () {
                // console.log($(this),$(this).data('index'));
                $('#modal' + $(this).data('index')).modal('open');
                drawBox($(this).data('index'), 2);
            });
            $dropDownMenu.find('.refresh').on('click', function (e) {
                // e.stopPropagation();
                var box_num = $(this).parent().find('.box_num');
                drawBox(box_num.data('boxindex'), box_num.val());
            });
            $dropDownMenu.find('.modal-title').on('mousedown', function (e) {
                moveModal($(this).parent(), e);
            });
            DOM.body.append($dropDownMenu);
        }
        // console.log('tr',tr);
        DOM.thead.append(tr);
        $('table .dropdown-button').dropdown({
            hover: true,
            belowOrigin: true
        });
        //手动触发模态框
        // drawBox(3,2);
        // $('.modal').modal();
        // $('#modal3').modal('open');
    }

    function drawTbody(startRow) {
        // $.get('data/test.json', function (data) {
            //先清空表体内容
            DOM.tbody.html('');
            var stop = Math.min((startRow + rowNum), data.length);
            for (var j = startRow; j < stop; j++) {
                var tb_tr = $('<tr></tr>');
                for (var k = 0; k < data[j].length; k++) {
                    var tb_td = $('<td>' + data[j][k] + '</td>');
                    tb_tr.append(tb_td);
                }
                DOM.tbody.append(tb_tr);
            }
            if ((stop - startRow) < rowNum) {
                // 绘制空格数部分
                var null_tr_num = rowNum - (stop - startRow);
                for (var i = 0; i < null_tr_num; i++) {
                    var null_tr = $('<tr></tr>');
                    for (var l = 0; l < 14; l++) {
                        var null_td = $('<td>' + '&nbsp' + '</td>');
                        null_tr.append(null_td);
                    }
                    DOM.tbody.append(null_tr);
                }
            }
        // });
    }

    function drawPagination() {
        //清空分页导航条
        DOM.pagination.html('');
        var pagination_left = $('<li id="chevron_left"><a href="javascript:;"><i class="material-icons">chevron_left</i></a>');
        var pagination_right = $('<li id="chevron_right"><a href="javascript:;"><i class="material-icons">chevron_right</i></a>');
        //第一页和最后一页时，改变左右方向箭头样式
        if (currentPage === 1) {
            pagination_left.removeClass('waves-effect').addClass('disabled');
        }
        if (currentPage === pages) {
            pagination_right.removeClass('waves-effect').addClass('disabled');
        }
        //给左右方向箭头绑定事件，实现翻页
        pagination_left.on('click', function () {
            // console.log('currentPage',currentPage);
            if (currentPage === 1) return;
            currentPage = currentPage - 1;
            refreshPage();
        });
        pagination_right.on('click', function () {
            if (currentPage === pages) return;
            currentPage = currentPage + 1;
            refreshPage();
        });
        //绘制上一页的方向箭头
        DOM.pagination.append(pagination_left);
        var stopNum;
        //当前页面为页面导航条的第一页或者最后一页时，切换导航条
        if (currentPage <= startNum) {
            startNum = currentPage - 3 < 0 ? 1 : currentPage - 3;
        }
        stopNum = (startNum + 6) > pages ? pages : (startNum + 6);
        if (currentPage >= stopNum || currentPage === 6) {
            startNum = currentPage - 3;
            stopNum = startNum + 6;
        }
        //页面导航的第一页和最后一页增加一个...的指示
        if (startNum <= 1) {
            startNum = 1;
            stopNum = 6;
        } else if (stopNum >= pages) {
            startNum = pages - 5;
            stopNum = pages;
        }
        var more = $('<li><a href="javascript:;" style="cursor: text">...</a></li>');
        if (stopNum === pages) {
            DOM.pagination.append(more);
        }
        // 绘制页面导航的页码部分
        drawNum();
        if (startNum === 1) {
            DOM.pagination.append(more);
        }
        //绘制下一页的方向箭头
        DOM.pagination.append(pagination_right);
        //绘制页码函数
        function drawNum() {
            for (var i = startNum; i <= stopNum; i++) {
                var pagination_tpl = $('<li class="waves-effect" data-index="' + i +
                    '"><a href="javascript:;">' + (i < 10 ? ('0' + i) : i) +
                    '</a></li>');
                if (i === currentPage) {
                    pagination_tpl.addClass('active');
                }
                if (i < 1 || i > pages) continue;
                //绑定页码点击事件
                pagination_tpl.on('click', function () {
                    var $this = $(this);
                    currentPage = $this.data('index');
                    refreshPage();
                });
                DOM.pagination.append(pagination_tpl);
            }
        }
    }

    /*刷新页面的函数，计算初始行，然后重新绘制表格和页面导航条*/
    function refreshPage() {
        var newRow = ((currentPage - 1) * rowNum) || 1;
        drawTbody(newRow);
        drawPagination(currentPage, pages);
    }

    //绘制echarts 柱状图
    function drawBox(col_num, box_num) {
        var col_arr = [],
            new_col_arr = [],
            mark_x = [],
            min_x,
            max_x
            ;
        // $.get('data/test.json', function (data) {
            var myEcharts = echarts.init(document.getElementById('bar' + col_num));
            var option;
            //计算col_arr中每一项在x中出现的次数,并离散化,生成连个新数组
            //new_col_arr为去除了重复项后的新的行数据和重复次数组成的二维数组
            discreArr(data);
            min_x = new_col_arr[0][0];
            max_x = new_col_arr[new_col_arr.length - 1][0];
            var mark_line = {
                animation: false,
                symbol: 'none',
                lineStyle: {
                    normal: {
                        type: 'solid',
                        color: 'black'
                    }
                },
                data: []
            };
            var mark_area = {
                silent: true,
                name: '值分布',
                data: []
            };
            //计算markLine的初始化坐标
            for (var p = 1; p < box_num; p++) {
                var mark_x_tpl = parseFloat(((max_x - min_x) * p / box_num + min_x).toFixed(2));
                mark_x.push(mark_x_tpl);
                mark_line.data.push({name: '分箱线', xAxis: mark_x_tpl});
            }
            //计算markArea的初始值
            for (var q = 0; q < box_num; q++) {
                var tmp = [{
                    name: (mark_x[q - 1] || min_x) + '到' + (mark_x[q] || max_x),
                    xAxis: (mark_x[q - 1] || min_x),
                    yAxis: 0
                }, {xAxis: (mark_x[q] || max_x), yAxis: 'max'}];
                if (q % 2 != 0) {
                    tmp[0].itemStyle = {
                        normal: {
                            color: '#ddd'
                        }
                    }
                }
                mark_area.data.push(tmp);
            }
            option = {
                title: {
                    // show: false,
                    // text: '直方图示例',         //标题
                    // subtext: 'echarts学习',    //副标题
                    // left: 100           //可以是数值，也可以是center,left,right
                    //            borderColor: 'red',
                    //            borderWidth: 5
                },
                toolbox: {
                    show: false,
                    itemSize: 20,
                    right: 100,
                    feature: {
                        dataView: {
                            show: true
                        },
                        /* restore: {
                         show: true
                         },*/
                        magicType: {
                            show: true,
                            type: ['line', 'bar']
                        }
                    }
                },
                tooltip: {
                    trigger: 'item',  //item为数据项触发,xAxis为x轴触发
                    formatter: function (params) {
                        if (typeof params.value[0] === 'undefined') return;
                        return '数据：' + params.value[0] + '<br>' +
                            '样本数:' + params.value[1]
                    }
                },
                grid: {
                    left: 40,
                    right: 40
                },
                legend: {
                    data: ['离散化']
                },
                xAxis: {
                    name: '数据',
                    min: min_x,
                    max: max_x
                },
                yAxis: {
                    name: '样本数'
                },
                series: [
                    {
                        name: '离散化',
                        type: 'bar',
                        data: new_col_arr,
                        markLine: mark_line,
                        markArea: mark_area
                    }
                ]
            };
            myEcharts.setOption(option);
            //鼠标移动时markLine跟着一起移动
            //实现方法：鼠标距离浏览器左边界距离-图表距离左边距离，得到鼠标距离图表左边界距离
            //markLine的(x-min)/(max-min)=鼠标距离图表左边距/图表宽度
            myEcharts.on('mousedown', function (params) {
                var $this = $(this);
                //当点击的目标是markLine时做...
                if (params.componentType === 'markLine') {
                    //console.log('params.dataIndex',params.dataIndex);
                    var i = params.dataIndex;
                    var area_min = mark_x[i - 1] || min_x;
                    var area_max = mark_x[i + 1] || max_x;
                    //移动鼠标时，刷新图表markLine的位置
                    $(myEcharts.getDom()).on('mousemove', function (e) {
                        $this = $(this);
                        //console.log('mousemove');
                        var x_zuobiao = parseFloat(((e.clientX - $this.offset().left - 40) * (max_x - min_x) / ($this.width() - 80) + min_x).toFixed(2));
                        //console.log((e.clientX - $this.offset().left)*(max_x-min_x)/($this.width()));
                        //控制鼠标的移动范围，防止markArea重叠
                        if (x_zuobiao < area_min || x_zuobiao > area_max) {
                            return;
                        }
                        //计算标线的位置
                        option.series[0].markLine.data[i].xAxis = x_zuobiao;
                        //计算标线左侧区域
                        option.series[0].markArea.data[i][0].xAxis = area_min;
                        option.series[0].markArea.data[i][0].name = area_min + '到' + x_zuobiao;
                        option.series[0].markArea.data[i][1].xAxis = x_zuobiao;
                        //右侧
                        option.series[0].markArea.data[i + 1][0].xAxis = x_zuobiao;
                        option.series[0].markArea.data[i + 1][0].name = x_zuobiao + '到' + area_max;
                        option.series[0].markArea.data[i + 1][1].xAxis = area_max;
                        myEcharts.setOption(option);
                    });
                    //松开鼠标按键时，更新mark_x中记录的markLine横坐标
                    $(myEcharts.getDom()).on('mouseup', function (e) {
                        // console.log('mouseup');
                        mark_x[i] = parseFloat(((e.clientX - $this.offset().left - 40) * (max_x - min_x) / ($this.width() - 80) + min_x).toFixed(2));
                        myEcharts.setOption(option);
                        //解除事件绑定
                        $(this).unbind();
                        myAlert('当前分箱线值：' + mark_x[i]);
                    });
                    //鼠标移出图标时，操作同mouseup
                    $(myEcharts.getDom()).on('mouseout', function (e) {
                        // console.log('mouseout');
                        mark_x[i] = parseFloat(((e.clientX - $this.offset().left - 40) * (max_x - min_x) / ($this.width() - 80) + min_x).toFixed(2));
                        myEcharts.setOption(option);
                        $(this).unbind();
                        myAlert('当前分箱线值：' + mark_x[i]);
                    });
                }
            });
        // });
        //数据处理
        function discreArr(data) {
            //取出所选列的数据
            for (var i = 1; i < data.length; i++) {
                var item = data[i][col_num];
                col_arr.push(item);
            }
            //对列数据从小到大排序
            col_arr.sort(sortNum);
            function sortNum(a, b) {
                return a - b;
            }

            //生成新的二维数组，一个是没有重复项的列数据，一个是重复次数
            var counter = 1;
            for (var j = 0; j < col_arr.length; j++) {
                if (col_arr[j] === col_arr[j + 1]) {
                    counter++;
                } else {
                    new_col_arr.push([col_arr[j], counter]);
                    counter = 1;
                }
                // console.log('new_col_arr.length,new_col_arr);
            }
        }
    }

    //移动模态框函数
    function moveModal(modal, event) {
        //获取按下鼠标时，鼠标距离面板左、上的距离
        disX = event.clientX - modal.offset().left;
        disY = event.clientY - modal.offset().top;
        // console.log('disX,disY',disX,disY);
        //移动鼠标
        DOM.document.on('mousemove', function (event) {
            var x = event.clientX - disX,
                y = event.clientY - disY,
                //获取视窗宽度
                winW = DOM.document.width(),
                winH = DOM.document.height(),
                maxW = winW - modal.width(),
                maxH = winH - modal.height();
            // console.log('winW,winH,maxW,maxH',winW,winH,maxW,maxH);
            //限制窗口移动范围
            if (x < 0) {
                x = 0;
            } else if (x > maxW - 10) {
                x = maxW - 10;
            }
            modal.css('margin', 0);
            modal.css('left', x + 'px');
            if (y < 10) {
                y = 10;
            } else if (y > maxH) {
                y = maxH;
            }
            modal.css('top', y + 'px');
            // console.log('x,y',x,y);
        });
        //释放鼠标
        DOM.document.on('mouseup', function () {
            DOM.document.unbind();
        });
    }

    //自定义alert
    function myAlert(title) {
        if (typeof title === 'string' && title !== 'undefined') {
            var $box
                , $box_mask
                , timer
                , $body = $('body')
                , $confirm
                ;
            $box = $('<div class="my-alert">' +
                '<h4 class="title">' + title + '</h4>' +
                '<a class="confirm btn">确认</a>' +
                '</div>')
                .css({
                    zIndex: 1000000
                });
            $box_mask = $('<div>' +
                '</div>')
                .css({
                    'background': 'rgba(0,0,0,.5)',
                    'position': 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 99999
                });
            $box_mask.on('click', hideAlert);
            $box.find('.cancel').on('click', hideAlert);
            $confirm = $box.find('.confirm');
            $confirm.on('click', hideAlert);
            $body.append($box_mask);
            $body.append($box);
            //焦点移动到确认按钮，这样按空格或者回车键也可以实现确认
            $confirm.focus();
            // replaceBox($box);
            function hideAlert() {
                $box.remove();
                $box_mask.remove();
            }

            function replaceBox(box) {
                var w = box.width() + parseInt(box.css('padding'))
                    , h = box.height() + parseInt(box.css('padding'))
                    ;
                box.css({
                    left: '50%',
                    'margin-left': -w / 2,
                    top: '50%',
                    'margin-top': (-h / 2) - 40
                });
            }
        }
    }
})();