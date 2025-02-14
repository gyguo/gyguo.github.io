document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.image-container');
  const flipInterval = 2000; // 每隔三秒翻转一次

  function flipRandomImage() {
      if (containers.length === 0) return;

      // 随机选择一个图片容器
      const randomIndex = Math.floor(Math.random() * containers.length);
      const selectedContainer = containers[randomIndex];

      // 翻转选中的图片容器
      selectedContainer.classList.toggle('flip');

      // 设置下一个翻转
      setTimeout(flipRandomImage, flipInterval);
  }

  // 为每个图片容器添加点击事件监听
  containers.forEach(container => {
      container.addEventListener('click', () => {
          container.classList.toggle('flip');
      });
  });

  // 开始自动翻转
  setTimeout(flipRandomImage, flipInterval);
});