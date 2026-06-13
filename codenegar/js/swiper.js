        var swiper = new Swiper('.mySwiper', {
            slidesPerView: 4, // تعداد اسلایدهای قابل مشاهده
            spaceBetween: 30, // فاصله بین اسلایدها (به پیکسل)
            slidesPerGroup: 1, // تعداد اسلایدها برای جابجایی در هر بار کلیک
            loop: true, // فعال کردن حلقه بی‌نهایت (اختیاری)
            loopFillGroupWithBlank: true, // پر کردن گروه‌های خالی در حالت حلقه (اختیاری)
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // امکان کلیک بر روی نشانگرهای صفحه بندی
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // تنظیمات برای رزولوشن‌های مختلف
                0: {
                    slidesPerView: 1, // در موبایل یک اسلاید
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2, // در تبلت دو اسلاید
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4, // در دسکتاپ چهار اسلاید
                    spaceBetween: 0,
                },
            }
        });