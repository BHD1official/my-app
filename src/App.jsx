import { useState } from "react";
import "./App.css";
import buildingimage from "./assets/buildlogo.png";
import gapalogo from "./assets/gapalogo.svg";



const APP_CONFIG = {
  courseTitle:        "'יסודות מנצחים'",
  courseDescription:  'תכן זה שואב השראה מהתל"ב המטכ"לי ומכין אותך לאתגרים בשטח',
  passThreshold:      70,
  excellentThreshold: 85,
};

const CHAPTERS = [
  { id:1, number:"פרק 1", title:"ניהול הדרכה",     accentColor:"#C49A3C", cardBg:"#FBF3E4",
    topics:[
      { id:"1.1", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:'א. בה"ד ירצו ישבה כפופים מקצועית לתחיליות\n\nב. בין הגילות ובין הב"ד תהקיימים יחסי מנולין\n\nג. יישום תחומים נוסטים בהם תקיימים יחסי מנולין' },
      { id:"1.2", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 1.2 — ערוך כאן" },
      { id:"1.3", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 1.3 — ערוך כאן" },
      { id:"1.4", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 1.4 — ערוך כאן" },
    ]},
  { id:2, number:"פרק 2", title:"תוכנית הכשרה",  accentColor:"#5F9080", cardBg:"#EBF3EF",
    topics:[
      { id:"2.1", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 2.1 — ערוך כאן" },
      { id:"2.2", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 2.2 — ערוך כאן" },
      { id:"2.3", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 2.3 — ערוך כאן" },
      { id:"2.4", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 2.4 — ערוך כאן" },
    ]},
  { id:3, number:"פרק 3", title:"סגל הכשרה",     accentColor:"#C49A3C", cardBg:"#FBF3E4",
    topics:[
      { id:"3.1", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 3.1 — ערוך כאן" },
      { id:"3.2", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 3.2 — ערוך כאן" },
      { id:"3.3", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 3.3 — ערוך כאן" },
      { id:"3.4", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 3.4 — ערוך כאן" },
    ]},
  { id:4, number:"פרק 4", title:"חניכים בהכשרה", accentColor:"#C0574A", cardBg:"#FDECEA",
    topics:[
      { id:"4.1", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 4.1 — ערוך כאן" },
      { id:"4.2", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 4.2 — ערוך כאן" },
    ]},
  { id:5, number:"פרק 5", title:"סביבת הכשרה",   accentColor:"#7B6BAF", cardBg:"#F0EDF8",
    topics:[
      { id:"5.1", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 5.1 — ערוך כאן" },
      { id:"5.2", title:"אחראיות מפקדת חיל ממונה בתחום ההדרכה", description:"למעבר מפורט לנושאים אלו", content:"תוכן 5.2 — ערוך כאן" },
    ]},
];


const QUIZ_QUESTIONS = [
  { id:1,  question:"עד סיום ההכשרה תהליך סיכום המחזור?",          options:["יומיים","שלושה ימים","שבוע","שבועיים"],        correctAnswer:0 },
  { id:2,  question:"כמה זמן יש לשמור כלל תחקירי ההכשרה?",         options:["שנה","שנתיים","שלוש שנים","חמש שנים"],          correctAnswer:3 },
  { id:3,  question:"מה חייב להיכלל בתוכנית ההכשרה?",               options:["רק נושאים מקצועיים","נושאים מקצועיים וחינוכיים","רק מבחנים","רק תרגילים"], correctAnswer:1 },
  { id:4,  question:"מי אחראי על אישור תוכנית ההכשרה?",              options:["מפקד הפלוגה","קצין ההדרכה","מפקד הגדוד","קצין חיל"], correctAnswer:2 },
  { id:5,  question:"מה הוא יחס המדריכים לחניכים המינימלי?",         options:["1:5","1:8","1:10","1:15"],                      correctAnswer:1 },
  { id:6,  question:"כמה שעות הכשרה נדרשות לפחות בשבוע?",            options:["20","30","40","50"],                            correctAnswer:2 },
  { id:7,  question:"מה תדירות ביצוע הערכת ביניים?",                 options:["שבועית","דו-שבועית","חודשית","בסיום כל שלב"],   correctAnswer:3 },
  { id:8,  question:"מי מאשר שינויים בתוכנית ההכשרה לאחר אישורה?",  options:["מפקד הפלוגה","קצין ההדרכה","מפקד הגדוד","אין אפשרות לשנות"], correctAnswer:2 },
  { id:9,  question:"מה נדרש לפני תחילת כל הכשרה?",                 options:["בדיקת ציוד בלבד","הכנת תוכנית","אישור מפקד","כל האמור לעיל"], correctAnswer:3 },
  { id:10, question:"מהי המטרה העיקרית של דוח סיום הכשרה?",          options:["תיעוד שעות","שיפור הכשרות עתידיות","דיווח לרמה עליונה","כל האמור לעיל"], correctAnswer:3 },
];

const IHome   = () => <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>;
const IBook   = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>;
const IArrL   = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>;
const IArrR   = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>;
const ISearch = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="#B0A090"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>;
const IChevD  = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>;
const IChevU  = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/></svg>;
const IPencil = () => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>;
const IHand   = () => <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83l1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16L8 15.99V4.5c0-.83.67-1.5 1.5-1.5S11 3.67 11 4.5V12h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V12h1V3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V12h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/></svg>;

const Shell = ({children}) => <div className="shell">{children}</div>;

function TopLogos({light=false}) {
  const bg = light?"rgba(255,255,255,0.22)":"#F5E6C3";
  const color = light?"white":"#7A5C3A";
  return (
    <div className="top-logos">
      <div className="gapa-logo" >
        <img  className="gapa-logo-img" src={gapalogo} alt="gapalogo"/>
        </div>
      <div className="logo-badge" style={{background:bg}}>
        <span style={{color}}>מדור</span><span style={{color}}>נגפ״ה</span><span style={{color}}>בה״ד</span>
      </div>
    </div>
  );
}

function PillHeader({title,subtitle,bg}) {
  return (
<div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 500 }}>
        <svg
          viewBox="0 0 500 200"
          style={{ display: "block", width: "100%" }}
        >
          <path
            d="M0,0 L500,0 L500,200 L450,200 Q250,140 50,200 L0,200 Z"
            fill="#D4806A"
          />
        </svg>
        {subtitle && <div className="header-subtitle">{subtitle}</div>}
        <div className="header-title" style={{marginTop:subtitle?2:10}}>{title}</div>
      </div>
    </div>

  );
}

function HomeBar({onHome,bg}) {
  return (
    <div className="home-bar" style={{background:bg}}>
      <button className="home-btn" onClick={onHome} style={{color:bg}}><IHome/></button>
    </div>
  );
}

function SearchBar({value,onChange}) {
  return (
    <div className="search-bar">
      <ISearch/>
      <input value={value} onChange={e=>onChange(e.target.value)} placeholder="חפש נושאים..."/>
    </div>
  );
}

function TopicCard({topic,accent,bg,isOpen,onToggle}) {
  return (
    <div className="topic-card" style={{background:bg}}>
      <div className="topic-row">
        <div className="topic-book-icon" style={{background:accent}}><IBook/></div>
        <div className="topic-text">
          <div className="topic-title">{topic.title}</div>
          <div className="topic-desc">{topic.description}</div>
          <button className="topic-toggle-btn" onClick={onToggle} style={{color:accent}}>
            {isOpen?<IChevU/>:<IChevD/>}
          </button>
        </div>
        <div className="topic-id-badge" style={{background:accent}}>{topic.id}</div>
      </div>
      {isOpen && (
        <div className="topic-content">
          <div className="topic-content-title" style={{color:accent}}>כללי</div>
          {topic.content}
        </div>
      )}
    </div>
  );
}

function WelcomeScreen({onStart}) {
  return (
    <Shell>
      <TopLogos/>
      <div className="welcome-illustration"><div className="big-emoji">
        <img className="buildimage" src={buildingimage}  alt="building image"/>
        </div></div>
      <div className="welcome-bottom">
        <div className="welcome-subtitle">לומדת</div>
        <div className="welcome-title">{APP_CONFIG.courseTitle}</div>
        <div className="welcome-desc">{APP_CONFIG.courseDescription}</div>
        <button className="start-btn" onClick={onStart}>← בואו נתחיל</button>
      </div>
    </Shell>
  );
}

function TopicsScreen({onChapter,onQuiz,onHome}) {
  const [search,setSearch] = useState("");
  const ICONS = {1:"🎯",2:"📋",3:"👥",4:"🎓",5:"🏛️"};
  const filtered = CHAPTERS.filter(c=>c.title.includes(search)||c.number.includes(search));
  return (
    <Shell>
      <PillHeader title="יסודות מנצחים" bg="#C0574A"/>
      <SearchBar value={search} onChange={setSearch}/>
      <div className="chapters-list">
        {filtered.map(ch=>(
          <button key={ch.id} className="chapter-btn" onClick={()=>onChapter(ch)} style={{background:ch.cardBg}}>
            <div className="chapter-icon" style={{background:ch.accentColor}}>{ICONS[ch.id]}</div>
            <div className="chapter-info">
              <div className="chapter-number" style={{color:ch.accentColor}}>{ch.number}</div>
              <div className="chapter-title">{ch.title}</div>
            </div>
            <div className="chapter-arrow" style={{background:ch.accentColor}}><IArrL/></div>
          </button>
        ))}
        <button className="quiz-btn" onClick={onQuiz}>
          <div className="quiz-btn-icon"><IPencil/></div>
          <div style={{flex:1}}>
            <div className="quiz-btn-title">בחן אותי!</div>
            <div className="quiz-btn-sub">10 שאלות על כל הנושאים</div>
          </div>
          <div className="quiz-btn-arrow"><IArrL/></div>
        </button>
      </div>
      <HomeBar onHome={onHome} bg="#C49A3C"/>
    </Shell>
  );
}

function ChapterScreen({chapter,allChapters,onChapter,onHome}) {
  const [search,setSearch] = useState("");
  const [openId,setOpenId] = useState(null);
  const idx = allChapters.findIndex(c=>c.id===chapter.id);
  const nextCh = allChapters[idx-1]||null;
  const prevCh = allChapters[idx+1]||null;
  const filtered = chapter.topics.filter(t=>t.title.includes(search)||t.id.includes(search));
  return (
    <Shell>
      <PillHeader title={chapter.title} subtitle={chapter.number} bg={chapter.accentColor}/>
      <SearchBar value={search} onChange={setSearch}/>
      <div className="chapters-list">
        {filtered.map(t=>(
          <TopicCard key={t.id} topic={t} accent={chapter.accentColor} bg={chapter.cardBg}
            isOpen={openId===t.id} onToggle={()=>setOpenId(openId===t.id?null:t.id)}/>
        ))}
      </div>
      <div className="chapter-nav" style={{background:chapter.accentColor}}>
        <div className="home-row">
          <button className="home-circle-btn" onClick={onHome} style={{color:chapter.accentColor}}><IHome/></button>
        </div>
        <div className="nav-row">
          <button className="nav-btn" onClick={()=>nextCh&&onChapter(nextCh)} disabled={!nextCh}
            style={{background:nextCh?"white":"rgba(255,255,255,0.35)",color:chapter.accentColor,cursor:nextCh?"pointer":"default"}}>
            <IArrL/> לנושא הבא
          </button>
          <button className="nav-btn" onClick={()=>prevCh&&onChapter(prevCh)} disabled={!prevCh}
            style={{background:prevCh?"white":"rgba(255,255,255,0.35)",color:chapter.accentColor,cursor:prevCh?"pointer":"default"}}>
            לנושא הקודם <IArrR/>
          </button>
        </div>
      </div>
    </Shell>
  );
}

function QuizSelectScreen({onStart}) {
  const [sel,setSel] = useState([]);
  const ICONS = {1:"📋",2:"🎯",3:"👥",4:"🎓",5:"🏛️"};
  const toggle = id=>setSel(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const ready = sel.length>0;
  return (
    <Shell>
      <div className="quiz-header">
        <button className="back-btn">←</button>
        <div className="pencil-circle"><IPencil/></div>
        <div className="quiz-header-title">בחן אותי !</div>
      </div>
      <div style={{padding:"20px 20px 8px",textAlign:"center"}}>
        <div style={{fontSize:18,fontWeight:700,color:"#3D2912"}}>{ready?"בחירת הפרקים עליהם תיבחן":"לחץ על הפרקים עליהם תרצה להיבחן"}</div>
        <div style={{fontSize:13,color:"#9A8472",marginTop:4}}>{ready?"לחץ על פרק כדי להוסיפו למבחן":"ניתן לבחור מספר נושאים"}</div>
      </div>
      <div className="quiz-select-grid">
        {CHAPTERS.map(ch=>{
          const on=sel.includes(ch.id);
          return (
            <button key={ch.id} className="quiz-select-card" onClick={()=>toggle(ch.id)}
              style={{background:on?ch.cardBg:"white",border:on?`2.5px solid ${ch.accentColor}`:"2px solid #E8DDD0"}}>
              <div className="card-icon" style={{background:on?ch.accentColor:"#F0EAE0"}}>{ICONS[ch.id]}</div>
              <div className="card-label" style={{color:on?ch.accentColor:"#7A5C3A"}}>{ch.title}</div>
            </button>
          );
        })}
      </div>
      <div style={{padding:"0 20px"}}>
        <button className="start-quiz-btn" onClick={()=>onStart(ready?sel:CHAPTERS.map(c=>c.id))}
          style={{background:ready?"#C49A3C":"#DDD5C8",color:ready?"white":"#9A8472"}}>
          אני מוכן להתחיל את המבחן !
        </button>
      </div>
    </Shell>
  );
}

function QuizInstructionsScreen({onStart}) {
  return (
    <Shell>
      <div className="quiz-header">
        <button className="back-btn">←</button>
        <div className="pencil-circle"><IPencil/></div>
        <div className="quiz-header-title">בחן אותי !</div>
      </div>
      <div style={{flex:1,padding:"30px 22px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <div className="instructions-box">
          <div className="instructions-title">שניה לפני המבחן</div>
          <div className="instructions-text">
            המבחן בנוי מ<strong>10 שאלות</strong> על כל הנושאים שלמדת,<br/>
            במידה ותרצה לחזור על הנושאים ניתן לעשות זאת כעת<br/>
            <strong>במהלך המבחן לא ניתן לחזור לנושאים</strong><br/><br/>
            שימו לב, בסיום המבחן תקבלו ציון,<br/>
            צלמו מסך טרם יציאה מהמבחן לשמירת הציון<br/><br/>
            <strong>!בהצלחה</strong>
          </div>
        </div>
        <button onClick={onStart} style={{background:"#C49A3C",color:"white",border:"none",borderRadius:18,width:"100%",padding:"16px 0",fontSize:18,fontWeight:700,fontFamily:"'Heebo',Arial,sans-serif"}}>
          התחל מבחן!
        </button>
      </div>
    </Shell>
  );
}

function QuizQuestionScreen({questions,onFinish}) {
  const [cur,setCur]     = useState(0);
  const [answers,setAnswers] = useState({});
  const [picked,setPicked]   = useState(null);
  const q = questions[cur];
  const isLast = cur===questions.length-1;
  const goNext = () => {
    if(picked===null) return;
    const a={...answers,[q.id]:picked};
    setAnswers(a);
    if(isLast){onFinish(questions,a);}
    else{setCur(cur+1);setPicked(null);}
  };
  const goPrev = () => {
    if(cur===0) return;
    setCur(cur-1);
    setPicked(answers[questions[cur-1].id]??null);
  };
  return (
    <Shell>
      <div className="question-header">
        <div className="q-top-row">
          <div className="q-counter">שאלה {cur+1}/{questions.length}</div>
          <div className="q-title">בחינה על הנושאים</div>
          <div style={{width:30}}/>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{width:`${((cur+1)/questions.length)*100}%`}}/>
        </div>
      </div>
      <div className="question-body">
        <div className="question-text">{q.question}</div>
        {q.options.map((opt,i)=>(
          <button key={i} onClick={()=>setPicked(i)} className={`option-btn ${picked===i?"selected":"unselected"}`}>
            {opt}
            <div className="radio-circle" style={{border:`2px solid ${picked===i?"white":"#C9AD8A"}`}}>
              {picked===i && <div className="radio-dot"/>}
            </div>
          </button>
        ))}
      </div>
      <div className="question-nav">
        <button className="nav-next-btn" onClick={goNext} disabled={picked===null}
          style={{background:picked!==null?"#4A3020":"#C8B8A8",cursor:picked!==null?"pointer":"default"}}>
          <IArrL/> {isLast?"לסיום המבחן":"לשאלה הבאה"}
        </button>
        <button className="nav-prev-btn" onClick={goPrev} disabled={cur===0}
          style={{opacity:cur===0?0.4:1,cursor:cur>0?"pointer":"default"}}>
          לשאלה הקודמת <IArrR/>
        </button>
      </div>
    </Shell>
  );
}

function ResultsScreen({questions,answers,onHome,onRetry}) {
  const [showReview,setShowReview] = useState(false);
  const correct = questions.filter(q=>answers[q.id]===q.correctAnswer).length;
  const total   = questions.length;
  const pct     = Math.round((correct/total)*100);
  const level =
    pct>=APP_CONFIG.excellentThreshold ? {bg:"#5F9080",title:"כל הכבוד! עבודה מעולה",           sub:`ענית נכון על ${correct} מתוך ${total} שאלות.\nעבודה מעולה`}
    :pct>=APP_CONFIG.passThreshold     ? {bg:"#C49A3C",title:"אולי כדאי להעמיק בחומר קצת יותר", sub:`ענית נכון על ${correct} מתוך ${total} שאלות.\nכדאי לנסות שוב לאחר חזרה על הנושאים.`}
    :                                    {bg:"#C0574A",title:"כדאי לחזור על החומר...",            sub:`ענית נכון על ${correct} מתוך ${total} שאלות.\nכדאי לנסות שוב לאחר חזרה על הנושאים.`};
  return (
    <Shell>
      <PillHeader title="תוצאות הבחינה" bg={level.bg}/>
      <div style={{flex:1,padding:"22px 20px",overflowY:"auto"}}>
        <div className="score-circle-wrap">
          <div className="score-circle" style={{border:`5px solid ${level.bg}`,boxShadow:`0 4px 20px ${level.bg}44`}}>
            <div className="score-pct">{pct}%</div>
            <div className="score-label">ציון סופי</div>
          </div>
        </div>
        <div className="result-message">
          <div className="result-title">{level.title}</div>
          <div className="result-sub">{level.sub}</div>
        </div>
        <button className="review-toggle-btn" onClick={()=>setShowReview(!showReview)} style={{background:level.bg}}>
          {showReview?"לחץ כאן לסגירת סקירות":"לחץ כאן לסקירת תשובות"}
        </button>
        {showReview && (
          <div className="review-list">
            {questions.map((q,i)=>{
              const ok=answers[q.id]===q.correctAnswer;
              return (
                <div key={q.id} className="review-item">
                  <div className="review-hand"><IHand/></div>
                  <div className="review-text">
                    <div className="review-q-num">שאלה {i+1}</div>
                    <div className="review-q-text">{q.question}</div>
                    <div className="review-answer">
                      <span style={{color:"#9A8472"}}>התשובה שלך: </span>
                      <span style={{fontWeight:700,color:ok?"#4CAF50":"#C0574A"}}>{q.options[answers[q.id]]??"—"}</span>
                    </div>
                    {!ok && <div className="review-answer" style={{marginTop:2}}>
                      <span style={{color:"#9A8472"}}>התשובה הנכונה: </span>
                      <span style={{fontWeight:700,color:"#4CAF50"}}>{q.options[q.correctAnswer]}</span>
                    </div>}
                  </div>
                  <div className="review-badge" style={{background:ok?"#4CAF50":"#C0574A"}}>{ok?"✓ נכון":"✗ שגוי"}</div>
                </div>
              );
            })}
          </div>
        )}
        <button className="retry-btn" onClick={onRetry}>נסה שוב</button>
      </div>
      <HomeBar onHome={onHome} bg={level.bg}/>
    </Shell>
  );
}

export default function App() {
  const [screen,setScreen]         = useState("welcome");
  const [chapter,setChapter]       = useState(null);
  const [quizResult,setQuizResult] = useState(null);
  const goHome = () => setScreen("topics");

  if(screen==="welcome")    return <WelcomeScreen onStart={()=>setScreen("topics")}/>;
  if(screen==="topics")     return <TopicsScreen onChapter={ch=>{setChapter(ch);setScreen("chapter");}} onQuiz={()=>setScreen("quizSelect")} onHome={goHome}/>;
  if(screen==="chapter"&&chapter) return <ChapterScreen chapter={chapter} allChapters={CHAPTERS} onChapter={ch=>setChapter(ch)} onHome={goHome}/>;
  if(screen==="quizSelect") return <QuizSelectScreen onStart={()=>setScreen("quizInstructions")}/>;
  if(screen==="quizInstructions") return <QuizInstructionsScreen onStart={()=>setScreen("quiz")}/>;
  if(screen==="quiz")       return <QuizQuestionScreen questions={QUIZ_QUESTIONS} onFinish={(qs,ans)=>{setQuizResult({questions:qs,answers:ans});setScreen("results");}}/>;
  if(screen==="results"&&quizResult) return <ResultsScreen questions={quizResult.questions} answers={quizResult.answers} onHome={goHome} onRetry={()=>setScreen("quizSelect")}/>;
  return null;
}