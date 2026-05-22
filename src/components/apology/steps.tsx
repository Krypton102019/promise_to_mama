import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { PageShell, TapeCard } from "./Layout";
import sadChar from "@/assets/sad-character.png";
import happyChar from "@/assets/happy-character.png";
import fistImg from "@/assets/fist.png";

const ourVideoSrc = new URL("../../assets/our-video.MOV", import.meta.url).href;
const photoOfUsSrc = new URL("../../assets/photo-of-us.jpg", import.meta.url).href;

const NAME = "မမ";

type Props = { onNext: (step?: number) => void };

function Btn({
  children,
  onClick,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  className?: string;
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    ghost: "bg-card text-foreground border-2 border-dashed border-primary/40",
  }[variant];
  return (
    <button
      onClick={onClick}
      className={`btn-3d rounded-2xl px-6 py-3 font-semibold tracking-wide text-base sm:text-lg active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------------- STEP 1 ---------------- */
export function Step1({ onNext }: Props) {
  return (
    <PageShell>
      <TapeCard className="text-center">
        <img
          src={sadChar}
          alt="Sad character"
          width={180}
          height={180}
          className="mx-auto h-40 w-40 animate-float"
        />
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-primary">
          Are you still mad at me? 🥺
        </h1>
        <p className="mt-3 text-muted-foreground">
          Be honest with me, {NAME}. I can take it.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Btn variant="primary" onClick={() => onNext(2)}>
            Yes
          </Btn>
          <Btn variant="accent" onClick={() => onNext(4)}>
            No
          </Btn>
        </div>
      </TapeCard>
    </PageShell>
  );
}

/* ---------------- STEP 2 ---------------- */
export function Step2({ onNext }: Props) {
  const [count, setCount] = useState(0);
  const [shake, setShake] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  const hit = () => {
    setCount((c) => c + 1);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  return (
    <div ref={shellRef} className={shake ? "shake-once" : ""}>
      <PageShell>
        <TapeCard className="text-center">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">
            If it still stings, {NAME}...
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary">
            Here, hit reset, {NAME}
          </h1>
          <p className="mt-3 text-muted-foreground">
            Tap as many times as you need to, {NAME}. Vent all your anger out on me.
          </p>

          <button
            onClick={hit}
            className="btn-3d mx-auto mt-8 flex h-48 w-48 select-none items-center justify-center rounded-full bg-secondary text-secondary-foreground active:scale-95"
            aria-label="Hit reset"
          >
            <img src={fistImg} alt="" width={140} height={140} className="h-32 w-32 pointer-events-none" />
          </button>
          <div className="mt-4 text-3xl font-extrabold text-primary tabular-nums">
            x{count}
          </div>

          <p className="mt-6 italic text-muted-foreground">
            Let it out, {NAME}. I've earned every single punch for what I did.
          </p>

          <div className="mt-8">
            <Btn variant="primary" onClick={() => onNext(3)} className="w-full">
              Okay, I feel lighter
            </Btn>
          </div>
        </TapeCard>
      </PageShell>
    </div>
  );
}

/* ---------------- STEP 3 ---------------- */
const LETTER = `ချစ်ရတဲ့ မမ...

မောင် အရင်က လုပ်ခဲ့ဖူးသမျှ အဆိုးဆုံး အမှားတွေကို ပြန်တွေးပြီး မမရဲ့ မျက်လုံးတွေကို သေသေချာချာ စိုက်ကြည့်ရင်း မောင် နှလုံးသားထဲကနေ တကယ်ပဲ အနူးအညွတ် တောင်းပန်ပါတယ်ဗျာ။ ဟိုးအရင်က မမအပေါ် မောင် သစ္စာဖောက်မိခဲ့တာဟာ မောင့်ဘဝရဲ့ အကြီးမားဆုံး အမှားတစ်ခုပါပဲ။ မမလို မိန်းကလေးတစ်ယောက်အနေနဲ့ ဒီလိုမျိုး အောက်တန်းကျတဲ့ လုပ်ရပ်တွေကို ဘယ်လိုမှ မခံထိုက်ပါဘူးဗျာ။ မမကို ဘယ်လောက်တောင် နာကျင်အောင် လုပ်ခဲ့မိလဲဆိုတာ ပြန်တွေးတိုင်း မောင် ကိုယ့်ကိုယ်ကိုယ် တကယ် မုန်းမိပါတယ်တယ်နော်။ နေရက်တိုင်းနောင်တရ နေပါတယ်။

ပြီးတော့ fake account လုပ် ပြီး မမကို စသလိုလုပ်ခဲ့မိတာတွေအတွက်လည်း မောင် တကယ်ကို နောင်တရပါတယ်။ အဲ့ဒါဟာ အရမ်းကလေးဆန်ပြီး disrespect ဖြစ်တဲ့ အပြုအမူမျိုး ဖြစ်ခဲ့ပါတယ်။ ဒီနေ့မှာတော့ မောင့်နှလုံးသားတစ်ခုလုံးနဲ့ ကတိသစ္စာပြုချင်တာကတော့... မမအပေါ် နောက်ဘယ်တော့မှ၊ ဘယ်သောအခါမှ မောင် ထပ်ပြီး သစ္စာမဖောက်တော့ပါဘူး။ မမကို စော်ကားမိစေမယ့်၊ နာကျင်စေမယ့် ဘယ်လိုအရာမျိုးကိုမှလည်း နောက်နောင် လုံးဝ(လုံးဝ) ထပ်မလုပ်တော့ပါဘူးလို့ မောင် သစ္စာဆိုပါတယ်တယ်နော်။

အခုချိန်မှာ မောင်တို့နှစ်ယောက်ရဲ့ အနာဂတ်ဘဝလေးအတွက်လည်း မောင် ကိုယ်စွမ်းဉာဏ်စွမ်းရှိသမျှ အကောင်းဆုံး ကြိုးစား တည်ဆောက်နေပါတယ်ဗျာ။ မမကို စကားလုံးသက်သက်တင် မဟုတ်ဘဲ တကယ်ပြောင်းလဲနေတဲ့ မောင့်ရဲ့ လက်တွေ့သက်သေအနေနဲ့ အခုလက်ရှိမှာလည်း Delivery Application Development Project ကြီးကို သေချာအာရုံစိုက်ပြီး အောင်မြင်အောင် တစိုက်မတ်မတ်လုပ်ဆောင်နေပါတယ်နော်။ မောင် တကယ် လူကြီးလူကောင်းတစ်ယောက်လို ကြိုးစားနေတာမို့ မောင့်ရဲ့ ကြိုးစားမှုကို စောင့်ကြည့်ပေးပါဦးဗျာ။

ငွငွေကြေးပိုင်းနဲ့ ပတ်သက်ပြီးတော့လည်း မောင် မမကို မပေးချင်လို့ သူများကို ပေးပစ်တာမျိုး၊ ငှားပစ်တာမျိုး အဲ့တာတွေ အရင်ကလည်း မရှိသလို နောက်လည်း ရှိ လာမှာမဟုတ်ပါဘူး။ မောင် ရှာဖွေလို့ ရလာသမျှ ငွေကြေးအားလုံးဟာ မမတစ်ယောက်တည်းကိုပဲ အပြည့်အဝ ထောက်ပံ့ပေးဖို့နဲ့ မမ စိတ်ချမ်းသာဖို့အတွက်ပါပဲ။ မမရယ်... မောင့်ကို ဒီဒဏ်ရာတွေကို ပြန်ကုစားပေးခွင့်နဲ့ မောင့်ရဲ့ loyalty ကိုသက်သေပြခွင့်လေး တစ်ကြိမ်လောက်ပဲ ပေးပါနော်။ မောင့်နှလုံးသားရဲ့ အောက်ခြေအထိကနေ ဒူးထောက်အသနားခံချင်တာကတော့... မမရဲ့ Ex ဆီကိုလည်း ပြန်မသွားပါနဲ့၊ ရည်းစားသစ်လည်း ထပ်မရှာပါနဲ့ဦးနော်။ မောင် ကိုယ်တိုင် ဖျက်ဆီးခဲ့တဲ့ အရာတွေကို မောင် ကိုယ်တိုင်ပဲ ပြန်ပြင်ဆင်ခွင့် ပေးပါဗျာ။

မမကို နာကျင်အောင် လုပ်ခဲ့မိသမျှအတွက် မမ ခိုင်းတာမှန်သမျှကို မောင် အကုန်လုပ်ပေးဖို့ အဆင်သင့်ပါပဲ။ မမ လိုချင်တဲ့ Wishlist ထဲက ပစ္စည်းမှန်သမျှကိုလည်း ဝယ်ပေးမယ့်အပြင်၊ မမ ဘာပဲခိုင်းခိုင်း တစ်ချက်မှ မငြင်းဘဲ အလိုလိုက်ရမယ့် 'Yes Day' ကိုလည်း မောင် အမြဲတမ်း လိုက်နာပါ့မယ်ဗျာ။ မမရဲ့ ယုံကြည်မှုကို ပြန်ရဖို့ ဘယ်လောက်ပဲ အချိန်ပေးရပေးရ... ပြစ်ဒဏ်အားလုံးကို မောင် အပြုံးမပျက် ပေးဆပ်သွားဖို့ အဆင်သင့်ပါပဲ။`;  

export function Step2({ onNext }: Props) {
  const [count, setCount] = useState(0);
  const [shake, setShake] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  const hit = () => {
    setCount((c) => c + 1);
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  return (
    <div ref={shellRef} className={shake ? "shake-once" : ""}>
      <PageShell>
        <TapeCard className="text-center">
          <p className="text-sm uppercase tracking-widest text-accent font-semibold">
            If it still stings, {NAME}...
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-primary">
            Here, hit reset, {NAME}
          </h1>
          <p className="mt-3 text-muted-foreground">
            Tap as many times as you need to, {NAME}. Vent all your anger out on me.
          </p>

          <button
            onClick={hit}
            className="btn-3d mx-auto mt-8 flex h-48 w-48 select-none items-center justify-center rounded-full bg-secondary text-secondary-foreground active:scale-95"
            aria-label="Hit reset"
          >
            <img src={fistImg} alt="" width={140} height={140} className="h-32 w-32 pointer-events-none" />
          </button>
          <div className="mt-4 text-3xl font-extrabold text-primary tabular-nums">
            x{count}
          </div>

          <p className="mt-6 italic text-muted-foreground">
            Let it out, {NAME}. I've earned every single punch for what I did.
          </p>

          <div className="mt-8">
            <Btn variant="primary" onClick={() => onNext(3)} className="w-full">
              Okay, I feel lighter
            </Btn>
          </div>
        </TapeCard>
      </PageShell>
    </div>
  );
}

/* ---------------- STEP 3 ---------------- */
const LETTER = `ချစ်ရတဲ့ မမ...

မောင် အရင်က လုပ်ခဲ့ဖူးသမျှ အဆိုးဆုံး အမှားတွေကို ပြန်တွေးပြီး မမရဲ့ မျက်လုံးတွေကို သေသေချာချာ စိုက်ကြည့်ရင်း မောင် နှလုံးသားထဲကနေ တကယ်ပဲ အနူးအညွတ် တောင်းပန်ပါတယ်ဗျာ။ ဟိုးအရင်က မမအပေါ် မောင် သစ္စာဖောက်မိခဲ့တာဟာ မောင့်ဘဝရဲ့ အကြီးမားဆုံး အမှားတစ်ခုပါပဲ။ မမလို မိန်းကလေးတစ်ယောက်အနေနဲ့ ဒီလိုမျိုး အောက်တန်းကျတဲ့ လုပ်ရပ်တွေကို ဘယ်လိုမှ မခံထိုက်ပါဘူးဗျာ။ မမကို ဘယ်လောက်တောင် နာကျင်အောင် လုပ်ခဲ့မိလဲဆိုတာ ပြန်တွေးတိုင်း မောင် ကိုယ့်ကိုယ်ကိုယ် တကယ် မုန်းမိပါတယ်တယ်နော်။ နေရက်တိုင်းနောင်တရ နေပါတယ်။

ပြီးတော့ fake account လုပ် ပြီး မမကို စသလိုလုပ်ခဲ့မိတာတွေအတွက်လည်း မောင် တကယ်ကို နောင်တရပါတယ်။ အဲ့ဒါဟာ အရမ်းကလေးဆန်ပြီး disrespect ဖြစ်တဲ့ အပြုအမူမျိုး ဖြစ်ခဲ့ပါတယ်။ ဒီနေ့မှာတော့ မောင့်နှလုံးသားတစ်ခုလုံးနဲ့ ကတိသစ္စာပြုချင်တာကတော့... မမအပေါ် နောက်ဘယ်တော့မှ၊ ဘယ်သောအခါမှ မောင် ထပ်ပြီး သစ္စာမဖောက်တော့ပါဘူး။ မမကို စော်ကားမိစေမယ့်၊ နာကျင်စေမယ့် ဘယ်လိုအရာမျိုးကိုမှလည်း နောက်နောင် လုံးဝ(လုံးဝ) ထပ်မလုပ်တော့ပါဘူးလို့ မောင် သစ္စာဆိုပါတယ်တယ်နော်။

အခုချိန်မှာ မောင်တို့နှစ်ယောက်ရဲ့ အနာဂတ်ဘဝလေးအတွက်လည်း မောင် ကိုယ်စွမ်းဉာဏ်စွမ်းရှိသမျှ အကောင်းဆုံး ကြိုးစား တည်ဆောက်နေပါတယ်ဗျာ။ မမကို စကားလုံးသက်သက်တင် မဟုတ်ဘဲ တကယ်ပြောင်းလဲနေတဲ့ မောင့်ရဲ့ လက်တွေ့သက်သေအနေနဲ့ အခုလက်ရှိမှာလည်း Delivery Application Development Project ကြီးကို သေချာအာရုံစိုက်ပြီး အောင်မြင်အောင် တစိုက်မတ်မတ်လုပ်ဆောင်နေပါတယ်နော်။ မောင် တကယ် လူကြီးလူကောင်းတစ်ယောက်လို ကြိုးစားနေတာမို့ မောင့်ရဲ့ ကြိုးစားမှုကို စောင့်ကြည့်ပေးပါဦးဗျာ။

ငွေကြေးပိုင်းနဲ့ ပတ်သက်ပြီးတော့လည်း မောင် မမကို မပေးချင်လို့ သူများကို ပေးပစ်တာမျိုး၊ ‌ချေး ပစ်တာမျိုး အဲ့တာတွေ အရင်ကလည်း မရှိသလို နောက်လည်း ရှိ လာမှာမဟုတ်ပါဘူး။ မောင် ရှာဖွေလို့ ရလာသမျှ ငွေကြေးအားလုံးဟာ မမတစ်ယောက်တည်းကိုပဲ အပြည့်အဝ ထောက်ပံ့ပေးဖို့နဲ့ မမ စိတ်ချမ်းသာဖို့အတွက်ပါပဲ။ မမရယ်... မောင့်ကို ဒီဒဏ်ရာတွေကို ပြန်ကုစားပေးခွင့်နဲ့ မောင့်ရဲ့ loyalty ကိုသက်သေပြခွင့်လေး တစ်ကြိမ်လောက်ပဲ ပေးပါနော်။ မောင့်နှလုံးသားရဲ့ အောက်ခြေအထိကနေ ဒူးထောက်အသနားခံချင်တာကတော့... မမရဲ့ Ex ဆီကိုလည်း ပြန်မသွားပါနဲ့၊ ရည်းစားသစ်လည်း ထပ်မရှာပါနဲ့ဦးနော်။ မောင် ကိုယ်တိုင် ဖျက်ဆီးခဲ့တဲ့ အရာတွေကို မောင် ကိုယ်တိုင်ပဲ ပြန်ပြင်ဆင်ခွင့် ပေးပါဗျာ။

မမကို နာကျင်အောင် လုပ်ခဲ့မိသမျှအတွက် မမ ခိုင်းတာမှန်သမျှကို မောင် အကုန်လုပ်ပေးဖို့ အဆင်သင့်ပါပဲ။ မမ လိုချင်တဲ့ Wishlist ထဲက ပစ္စည်းမှန်သမျှကိုလည်း ဝယ်ပေးမယ့်အပြင်၊ မမ ဘာပဲခိုင်းခိုင်း တစ်ချက်မှ မငြင်းဘဲ အလိုလိုက်ရမယ့် 'Yes Day' ကိုလည်း မောင် အမြဲတမ်း လိုက်နာပါ့မယ်ဗျာ။ မမရဲ့ ယုံကြည်မှုကို ပြန်ရဖို့ ဘယ်လောက်ပဲ အချိန်ပေးရပေးရ... ပြစ်ဒဏ်အားလုံးကို မောင် အပြုံးမပျက် ပေးဆပ်သွားဖို့ အဆင်သင့်ပါပဲနော်။`;

export function Step3({ onNext }: Props) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 3;
      setShown(LETTER.slice(0, i));
      if (i >= LETTER.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 18);
    return () => clearInterval(id);
  }, []);

  return (
    <PageShell>
      <TapeCard>
        <div className="text-center">
          <div className="inline-block text-4xl">💌</div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary">
            A Real & Deep Apology to {NAME}
          </h1>
        </div>

        <div className="mt-6 max-h-[60vh] overflow-y-auto rounded-2xl border-2 border-dashed border-accent/40 bg-secondary/30 p-5 leading-relaxed whitespace-pre-line text-foreground/90">
          {shown}
          {!done && <span className="ml-0.5 inline-block w-2 animate-pulse">▍</span>}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {!done && (
            <button
              onClick={() => {
                setShown(LETTER);
                setDone(true);
              }}
              className="text-sm text-muted-foreground underline"
            >
              Skip typing
            </button>
          )}
          <Btn variant="primary" onClick={() => onNext(4)} className="w-full">
            Click to read my lifetime promises to you, {NAME} ❤️
          </Btn>
        </div>
      </TapeCard>
    </PageShell>
  );
}

/* ---------------- STEP 4 ---------------- */
const PROMISES = [
  `I promise to be 100% transparent and loyal to you, always, ${NAME}.`,
  `I promise I will never cheat or break your trust ever again, ${NAME}.`,
  `I promise to respect you, cherish you, and never hide anything from you.`,
  `I know my actions hurt you deeply, မမ. I can’t change what I did, but I promise there will never be another person, another lie, or another betrayal again.`,
  `I promise to spend the rest of my days making up for the past and making you smile.`,
];

export function Step4({ onNext }: Props) {
  const [idx, setIdx] = useState(0);
  const [key, setKey] = useState(0);

  const draw = () => {
    let next = idx;
    while (next === idx && PROMISES.length > 1) {
      next = Math.floor(Math.random() * PROMISES.length);
    }
    setIdx(next);
    setKey((k) => k + 1);
  };

  return (
    <PageShell>
      <TapeCard className="text-center">
        <p className="text-sm uppercase tracking-widest text-accent font-semibold">
          {NAME}, reach into the jar...
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-primary">
          Pull a lifetime promise for {NAME} 🫙
        </h1>

        <div className="mt-6 rounded-3xl border-2 border-dashed border-amber-soft-foreground/40 bg-amber-soft p-6 min-h-[180px] flex items-center justify-center [perspective:1000px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={key}
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="text-lg sm:text-xl font-semibold text-amber-soft-foreground leading-snug"
            >
              “{PROMISES[idx]}”
            </motion.p>
          </AnimatePresence>
        </div>

        <p className="mt-4 text-sm italic text-muted-foreground">
          Written slowly for {NAME}, meant fully and truthfully.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Btn variant="accent" onClick={draw}>
            Draw another
          </Btn>
          <Btn variant="primary" onClick={() => onNext(5)}>
            Keep it for {NAME}
          </Btn>
        </div>
      </TapeCard>
    </PageShell>
  );
}

/* ---------------- STEP 5 ---------------- */
export function Step5() {
  useEffect(() => {
    const burst = () => {
      confetti({
        particleCount: 80,
        spread: 90,
        startVelocity: 45,
        origin: { x: Math.random(), y: Math.random() * 0.3 },
        colors: ["#ff6fa3", "#b59cff", "#ffd1dc", "#ffb84d", "#c43b86"],
      });
    };
    burst();
    const id = setInterval(burst, 900);
    return () => clearInterval(id);
  }, []);

  const hearts = Array.from({ length: 18 });

  return (
    <PageShell>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {hearts.map((_, i) => (
          <span
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}px`,
              animation: `floatHeart ${6 + Math.random() * 6}s linear ${Math.random() * 4}s infinite`,
              color: "var(--primary)",
            }}
          >
            💖
          </span>
        ))}
      </div>

      <TapeCard className="text-center relative">
        <img
          src={happyChar}
          alt="Happy character"
          width={200}
          height={200}
          className="mx-auto h-44 w-44 animate-float"
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-primary leading-snug">
          Yay! Thank you for forgiving me, {NAME}! <br />
          I promise to protect your heart forever! 💖
        </h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-secondary/40 p-3">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-card flex items-center justify-center text-muted-foreground text-sm">
              <img
                src={photoOfUsSrc}
                alt={`Us`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              
            </div>
            <p className="mt-2 text-sm font-semibold text-primary">Us 💕</p>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-accent/40 bg-accent/10 p-3">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-card flex items-center justify-center text-muted-foreground text-sm relative">
              <video
                src={ourVideoSrc}
                controls
                playsInline
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLVideoElement).style.display = "none";
                }}
              />
             
            </div>
            <p className="mt-2 text-sm font-semibold text-accent">Our memory</p>
          </div>
        </div>

        <p className="mt-6 text-muted-foreground italic">
          Forever yours, {NAME}. Always.
        </p>
      </TapeCard>
    </PageShell>
  );
}
