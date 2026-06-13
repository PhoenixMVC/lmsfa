/*Extra Text*/
document.querySelectorAll('.collapsible-text .toggle-button').forEach(button => {
  button.addEventListener('click', function () {
    const collapsibleText = this.closest('.collapsible-text');
    const expandedContent = collapsibleText.querySelector('.expanded-content');

    if (expandedContent.style.display === 'none') {
      expandedContent.style.display = 'block';
      this.textContent = 'بستن'; // تغییر متن دکمه به '-' پس از باز شدن
    } else {
      expandedContent.style.display = 'none';
      this.textContent = 'مشاهده بیشتر'; // تغییر متن دکمه به '+' پس از بسته شدن
    }
  });
});