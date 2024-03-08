// 获取Canvas元素
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置Canvas的宽度和高度
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义要绘制的几何图形
const shapes = [];
const numShapes = 100;

// 生成随机位置和大小的几何图形
for (let i = 0; i < numShapes; i++) {
    shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 50 + 10, // 大小在10到60之间
        color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16) // 随机颜色
    });
}

// 更新动画
function update() {
    // 清除Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 遍历所有几何图形，绘制并更新位置
    for (let i = 0; i < numShapes; i++) {
        const shape = shapes[i];

        // 绘制几何图形
        ctx.fillStyle = shape.color;
        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fill();

        // 更新位置
        shape.x += Math.random() * 4 - 2; // 在[-2, 2]范围内随机变化
        shape.y += Math.random() * 4 - 2; // 在[-2, 2]范围内随机变化

        // 碰撞检测，使几何图形在Canvas边界内
        if (shape.x < 0) shape.x = 0;
        if (shape.x > canvas.width) shape.x = canvas.width;
        if (shape.y < 0) shape.y = 0;
        if (shape.y > canvas.height) shape.y = canvas.height;
    }

    // 循环调用更新函数
    requestAnimationFrame(update);
}

// 开始动画
update();
