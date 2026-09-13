'use client';

import React, { useState } from 'react';
import { useAppTheme } from './SecurityShield';
import { HemooraLogo } from './HemooraLogo';
import { X, CheckCircle, Phone, MessageSquare, Palette } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDesignTitle?: string;
  phone?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialDesignTitle = 'کارت ویزیت اختصاصی',
  phone = '۰۹۳۵۴۴۶۷۲۶۹',
}) => {
  const { isDark } = useAppTheme();
  const rawPhone = '09354467269';
  const [designType, setDesignType] = useState(initialDesignTitle);
  const [paperMaterial, setPaperMaterial] = useState('ایندربرد ۳۵۰ گرم + سلفون مات مخملی');
  const [finishOption, setFinishOption] = useState('یووی موضعی برجسته روی لوگو و نام');
  const [quantity, setQuantity] = useState('۱۰۰۰ عدد');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const whatsappMessage = encodeURIComponent(
    `سلام و درود، درخواست استعلام قیمت و سفارش طراحی از سایت هیمورا را دارم:\n` +
      `▪️ نوع طرح انتخابی: ${designType}\n` +
      `▪️ متریال و کاغذ: ${paperMaterial}\n` +
      `▪️ خدمات پس از چاپ: ${finishOption}\n` +
      `▪️ تیراژ چاپ: ${quantity}\n` +
      `▪️ نام سفارش‌دهنده: ${customerName || 'ثبت نشده'}\n` +
      `▪️ شماره تماس: ${customerPhone || 'ثبت نشده'}\n` +
      `▪️ توضیحات تکمیلی: ${customNotes || '-'}`
  );

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className={`border rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-right transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-white'
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-200'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isDark
              ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <HemooraLogo size="sm" variant="badge" />
            </div>
            <h3 className={`text-xl sm:text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              سفارش طراحی اختصاصی انواع کارت ویزیت و سرنسخه
            </h3>
            <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              تحویل فایل‌های اصلی لایه‌باز و تفکیک رنگی ۳۰۰DPI با بالاترین کیفیت استاندارد چاپ.
            </p>

            <form onSubmit={handleQuickSubmit} className="space-y-4 text-xs">
              {/* Design Type */}
              <div>
                <label className={`block font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  نوع طرح و محصول:
                </label>
                <select
                  value={designType}
                  onChange={(e) => setDesignType(e.target.value)}
                  className={`w-full border rounded-xl px-3.5 py-2.5 outline-none transition-all ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                  }`}
                >
                  <option value="کارت ویزیت پزشکی دورو (کد MED-BC-2025)">کارت ویزیت دورو پزشکی و درمانگاه</option>
                  <option value="کارت ویزیت لوکس بلک اند گلد (کد LUX-BG-2025)">کارت ویزیت لوکس طلاکوب و برجسته</option>
                  <option value="کارت ویزیت مدرن شرکتی و مهندسی">کارت ویزیت شرکتی و فناوری</option>
                  <option value="کارت ویزیت دفتر وکالت و مشاوره حقوقی">کارت ویزیت وکالت و حقوقی</option>
                  <option value="سرنسخه تخصصی پزشکی A5 (کد RX-PAD-A5)">سرنسخه تخصصی پزشکی A5</option>
                  <option value="ست کامل اوراق اداری و سازمانی">ست اداری کامل (کارت، سربرگ، پاکت و فولدر)</option>
                </select>
              </div>

              {/* Material & Paper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    نوع کاغذ و متریال:
                  </label>
                  <select
                    value={paperMaterial}
                    onChange={(e) => setPaperMaterial(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 outline-none ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                  >
                    <option value="ایندربرد ۳۵۰ گرم + سلفون مات مخملی">ایندربرد ۳۵۰ گرم (پرطرفدار)</option>
                    <option value="لمینت مات ۶۰۰ گرم دورگرد">لمینت مات ۶۰۰ گرم ضخیم</option>
                    <option value="لمینت براق ۶۰۰ گرم">لمینت براق ۶۰۰ گرم</option>
                    <option value="کتان فابریانو بافت‌دار">کتان فابریانو بافت‌دار</option>
                    <option value="پی‌وی‌سی مات ۵۰۰ میکرون ضدآب">پی‌وی‌سی (PVC) ضدآب</option>
                    <option value="مقوای فابریانو بلک ۶۰۰ گرم">مقوای فابریانو مشکی خالص</option>
                    <option value="فقط تحویل فایل طراحی بدون چاپ">فقط فایل طراحی (بدون چاپ)</option>
                  </select>
                </div>

                <div>
                  <label className={`block font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    خدمات پس از چاپ:
                  </label>
                  <select
                    value={finishOption}
                    onChange={(e) => setFinishOption(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 outline-none ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                  >
                    <option value="یووی موضعی برجسته روی لوگو و نام">یووی موضعی برجسته (Spot UV)</option>
                    <option value="طلاکوب یا نقره‌کوب حرارتی">طلاکوب / نقره‌کوب حرارتی</option>
                    <option value="روکش سلفون ساده بدون افکت">روکش سلفون ساده مات</option>
                    <option value="برش قالبی اختصاصی">برش قالبی اختصاصی (Die-Cut)</option>
                  </select>
                </div>
              </div>

              {/* Quantity & Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={`block font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    تیراژ درخواستی:
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className={`w-full border rounded-xl px-3 py-2.5 outline-none ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                  >
                    <option value="۵۰۰ عدد">۵۰۰ عدد</option>
                    <option value="۱۰۰۰ عدد (پرفروش‌ترین)">۱۰۰۰ عدد (پرفروش‌ترین و باصرفه)</option>
                    <option value="۲۰۰۰ عدد">۲۰۰۰ عدد</option>
                    <option value="فقط نسخه دیجیتال">فقط نسخه دیجیتال</option>
                  </select>
                </div>

                <div>
                  <label className={`block font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    نام شما یا برند:
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="مثال: دکتر رادمنش یا شرکت هیمورا"
                    className={`w-full border rounded-xl px-3.5 py-2.5 outline-none ${
                      isDark
                        ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                    }`}
                  />
                </div>
              </div>

              {/* Contact phone */}
              <div>
                <label className={`block font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  شماره تماس شما جهت هماهنگی اتود اولیه:
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                  className={`w-full border rounded-xl px-3.5 py-2.5 outline-none font-mono text-left ${
                    isDark
                      ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-cyan-500'
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-blue-500'
                  }`}
                  dir="ltr"
                />
              </div>

              {/* Direct Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/98${rawPhone.slice(1)}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ارسال سفارش در واتس‌اپ</span>
                </a>

                <a
                  href={`tel:${rawPhone}`}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>تماس مستقیم ({phone})</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              درخواست شما با موفقیت ثبت شد
            </h4>
            <p className={`text-xs max-w-md mx-auto mb-6 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              کارشناسان طراحی گروه نرم‌افزاری هیمورا ظرف مدت ۳۰ دقیقه جهت دریافت اطلاعات متنی و شروع فرآیند با شما تماس خواهند گرفت.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href={`tel:${rawPhone}`}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>تماس فوری: {phone}</span>
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium border ${
                  isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                بستن پنجره
              </button>
            </div>
          </div>
        )}

        <div
          className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] ${
            isDark ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'
          }`}
        >
          <span>تیم طراحی گروه نرم‌افزاری هیمورا</span>
          <span className="font-mono text-blue-600 dark:text-cyan-400">تلفن: {phone}</span>
        </div>
      </div>
    </div>
  );
};
