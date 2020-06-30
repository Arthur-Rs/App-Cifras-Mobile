var mapMenosMeioTom = {
"C": "B","C#": "C","Db": "C","D": "C#","D#": "D","Eb":"D","E": "D#","F": "E","F#": "F","Gb":"F","G": "F#","G#": "G","Ab":"G","A": "G#","A#": "A","Bb":"A","B": "A#",
"Cm": "Bm","C#m": "Cm","Dbm": "Cm","Dm": "C#m","D#m": "Dm","Ebm":"Dm","Em": "D#m","Fm": "Em","F#m": "Fm","Gbm":"Fm","Gm": "F#m","G#m": "Gm","Abm":"Gm","Am": "G#m","A#m": "Am","Bbm":"Am","Bm": "A#m",
"Cm7": "Bm7","C#m7": "Cm7","Dbm7": "Cm7","Dm7": "C#m7","D#m7": "Dm7","Ebm7":"Dm7","Em7": "D#m7","Fm7": "Em7","F#m7": "Fm7","Gbm7":"Fm7","Gm7": "F#m7","G#m7": "Gm7","Abm7":"Gm7","Am7": "G#m7","A#m7": "Am7","Bbm7":"Am7","Bm7": "A#m7",
"C7": "B7","C#7": "C7","Db7": "C7","D7": "C#7","D#7": "D7","Eb7":"D7","E7": "D#7","F7": "E7","F#7": "F7","Gb7":"F7","G7": "F#7","G#7": "G7","Ab7":"G7","A7": "G#7","A#7": "A7","Bb7":"A7","B7": "A#7",
"C/E": "B/D#","C#/F": "C/E","Db/F": "C/E","D/F#": "C#/F","D#/G": "D/F#","Eb/G":"D/F#","E/G#": "D#/G","F/A": "E/G#","F#/A#": "F/A","Gb/A#":"F/A","G/B": "F#/A#","G#/C": "G/B","Ab/C":"G/B","A/C#": "G#/C","A#/D": "A/C#","Bb/D":"A/C#","B/D#": "A#/D",
"C7+": "B7+","C#7+": "C7+","Db7+": "C7+","D7+": "C#7+","D#7+": "D7+","Eb7+":"D7+","E7+": "D#7+","F7+": "E7+","F#7+": "F7+","Gb7+":"F7+","G7+": "F#7+","G#7+": "G7+","Ab7+":"G7+","A7+": "G#7+","A#7+": "A7+","Bb7+":"A7+","B7+": "A#7+",
"C7+/9": "B7+/9","C#7+/9": "C7+/9","Db7+/9": "C7+/9","D7+/9": "C#7+/9","D#7+/9": "D7+/9","Eb7+/9":"D7+/9","E7+/9": "D#7+/9","F7+/9": "E7+/9","F#7+/9": "F7+/9","Gb7+/9":"F7+/9","G7+/9": "F#7+/9","G#7+/9": "G7+/9","Ab7+/9":"G7+/9","A7+/9": "G#7+/9","A#7+/9": "A7+/9","Bb7+/9":"A7+/9","B7+/9": "A#7+/9",
"C9": "B9","C#9": "C9","Db9": "C9","D9": "C#9","D#9": "D9","Eb9":"D9","E9": "D#9","F9": "E9","F#9": "F9","Gb9":"F9","G9": "F#9","G#9": "G9","Ab9":"G9","A9": "G#9","A#9": "A9","Bb9":"A9","B9": "A#9",
"C/D": "B/C#","C#/D#": "C/D","Db/Eb": "C/D","D/E": "C#/D#","D#/F": "D/E","Eb/F":"D/E","E/F#": "D#/F","F/G": "E/F#","F#/G#": "F/G","Gb/Ab":"F/G","G/A": "F#/G#","G#/A#": "G/A","Ab/Bb":"G/A","A/B": "G#/A#","A#/C": "A/B","Bb/C":"A/B","B/C#": "A#/C",
"Cm7/A#": "Bm7/A","C#m7/B": "Cm7/A#","Dbm7/B": "Cm7/A#","Dm7/C": "C#m7/B","D#m7/C#": "Dm7/C","Ebm7/Db":"Dm7/C","Em7/D": "D#m7/C#","Fm7/D#": "Em7/D","F#m7/E": "Fm7/D#","Gbm7/E":"Fm7/D#","Gm7/F": "F#m7/E","G#m7/F#": "Gm7/F","Abm7/Gb":"Gm7/F","Am7/G": "G#m7/F#","A#m7/G#": "Am7/G","Bbm7/Ab":"Am7/G","Bm7/A": "A#m7/G#",
"C°": "B°","C#°": "C°","Db°": "C°","D°": "C#°","D#°": "D°","Eb°":"D°","E°": "D#°","F°": "E°","F#°": "F°","Gb°":"F°","G°": "F#°","G#°": "G°","Ab°":"G°","A°": "G#°","A#°": "A°","Bb°":"A°","B°": "A#°",
"Cº": "Bº","C#º": "Cº","Dbº": "Cº","Dº": "C#º","D#º": "Dº","Ebº":"Dº","Eº": "D#º","Fº": "Eº","F#º": "Fº","Gbº":"Fº","Gº": "F#º","G#º": "Gº","Abº":"Gº","Aº": "G#º","A#º": "Aº","Bbº":"Aº","Bº": "A#º",
"Cm°": "Bm°","C#m°": "Cm°","Dbm°": "Cm°","Dm°": "C#m°","D#m°": "Dm°","Ebm°":"Dm°","Em°": "D#m°","Fm°": "Em°","F#m°": "Fm°","Gbm°":"Fm°","Gm°": "F#m°","G#m°": "Gm°","Abm°":"Gm°","Am°": "G#m°","A#m°": "Am°","Bbm°":"Am°","Bm°": "A#m°",
"Cmº": "Bmº","C#mº": "Cmº","Dbmº": "Cmº","Dmº": "C#mº","D#mº": "Dmº","Ebmº":"Dmº","Emº": "D#mº","Fmº": "Emº","F#mº": "Fmº","Gbmº":"Fmº","Gmº": "F#mº","G#mº": "Gmº","Abmº":"Gmº","Amº": "G#mº","A#mº": "Amº","Bbmº":"Amº","Bmº": "A#mº",
"C°7": "B°7","C#°7": "C°7","Db°7": "C°7","D°7": "C#°7","D#°7": "D°7","Eb°7":"D°7","E°7": "D#°7","F°7": "E°7","F#°7": "F°7","Gb°7":"F°7","G°7": "F#°7","G#°7": "G°7","Ab°7":"G°7","A°7": "G#°7","A#°7": "A°7","Bb°7":"A°7","B°7": "A#°7",
"Cº7": "Bº7","C#º7": "Cº7","Dbº7": "Cº7","Dº7": "C#º7","D#º7": "Dº7","Ebº7":"Dº7","Eº7": "D#º7","Fº7": "Eº7","F#º7": "Fº7","Gbº7":"Fº7","Gº7": "F#º7","G#º7": "Gº7","Abº7":"Gº7","Aº7": "G#º7","A#º7": "Aº7","Bbº7":"Aº7","Bº7": "A#º7",
"C/A#": "B/A","C#/B": "C/A#","Db/B": "C/A#","D/C": "C#/B","D#/C#": "D/C","Eb/Db":"D/C","E/D": "D#/C#","F/D#": "E/D","F#/E": "F/D#","Gb/E":"F/D#","G/F": "F#/E","G#/F#": "G/F","Ab/Gb":"G/F","A/G": "G#/F#","A#/G#": "A/G","Bb/Ab":"A/G","B/A": "A#/G#",
"C7/9": "B7/9","C#7/9": "C7/9","Db7/9": "C7/9","D7/9": "C#7/9","D#7/9": "D7/9","Eb7/9":"D7/9","E7/9": "D#7/9","F7/9": "E7/9","F#7/9": "F7/9","Gb7/9":"F7/9","G7/9": "F#7/9","G#7/9": "G7/9","Ab7/9":"G7/9","A7/9": "G#7/9","A#7/9": "A7/9","Bb7/9":"A7/9","B7/9": "A#7/9",
"Cm/D#": "Bm/D","C#m/E": "Cm/D#","Dbm/E": "Cm/D#","Dm/F": "C#m/E","D#m/F#": "Dm/F","Ebm/F#":"Dm/F","Em/G": "D#m/F#","Fm/G#": "Em/G","F#m/A": "Fm/G#","Gbm/A":"Fm/G#","Gm/A#": "F#m/A","G#m/B": "Gm/A#","Abm/B":"Gm/A#","Am/C": "G#m/B","A#m/C#": "Am/C","Bbm/C#":"Am/C","Bm/D": "A#m/C#",
"C/E": "B/D#","C#/F": "C/E","Db/F": "C/E","D/F#": "C#/F","D/Gb": "C#/F","D#/G": "D/F#","Eb/G":"D/F#","E/G#": "D#/G","E/Ab": "D#/G","F/A": "E/G#","F#/A#": "F/A","F#/Bb": "F/A","Gb/A#":"F/A","Gb/Bb":"F/A","G/B": "F#/A#","G#/C": "G/B","Ab/C":"G/B","A/C#": "G#/C","A/Db": "G#/C","A#/D": "A/C#","Bb/D":"A/C#","B/D#": "A#/D","B/Eb": "A#/D",
"C/G": "B/F#","C#/G#": "C/G","Db/Ab": "C/G","D/A": "C#/G#","D#/A#": "D/A","Eb/Bb":"D/A","E/B": "D#/A#","F/C": "E/B","F#/C#": "F/C","Gb/Db":"F/C","G/D": "F#/C#","G#/D#": "G/D","Ab/Eb":"G/D","A/E": "G#/D#","A#/F": "A/E","Bb/F":"A/E","B/F#": "A#/F",
"C9/G": "B9/F#","C#9/G#": "C9/G","Db9/Ab": "C9/G","D9/A": "C#9/G#","D#9/A#": "D9/A","Eb9/Bb":"D9/A","E9/B": "D#9/A#","F9/C": "E9/B","F#9/C#": "F9/C","Gb9/Db":"F9/C","G9/D": "F#9/C#","G#9/D#": "G9/D","Ab9/Eb":"G9/D","A9/E": "G#9/D#","A#9/F": "A9/E","Bb9/F":"A9/E","B9/F#": "A#9/F",
"Cm/A#": "Bm/A","C#m/B": "Cm/A#","Dbm/B": "Cm/A#","Dm/C": "C#m/B","D#m/C#": "Dm/C","Ebm/Db":"Dm/C","Em/D": "D#m/C#","Fm/D#": "Em/D","F#m/E": "Fm/D#","Gbm/E":"Fm/D#","Gm/F": "F#m/E","G#m/F#": "Gm/F","Abm/Gb":"Gm/F","Am/G": "G#m/F#","A#m/G#": "Am/G","Bbm/Ab":"Am/G","Bm/A": "A#m/G#",
"Cm/G#": "Bm/G","C#m/A": "Cm/G#","Dbm/A": "Cm/G#","Dm/A#": "C#m/A","D#m/B": "Dm/A#","Ebm/B":"Dm/A#","Em/C": "D#m/B","Fm/C#": "Em/C","F#m/D": "Fm/C#","Gbm/D":"Fm/C#","Gm/D#": "F#m/D","G#m/E": "Gm/D#","Abm/E":"Gm/D#","Am/F": "G#m/E","A#m/F#": "Am/F","Bbm/Gb":"Am/F","Bm/G": "A#m/F#",
"C4": "B4","C#4": "C4","Db4": "C4","D4": "C#4","D#4": "D4","Eb4":"D4","E4": "D#4","F4": "E4","F#4": "F4","Gb4":"F4","G4": "F#4","G#4": "G4","Ab4":"G4","A4": "G#4","A#4": "A4","Bb4":"A4","B4": "A#4",
"C4/9": "B4/9","C#4/9": "C4/9","Db4/9": "C4/9","D4/9": "C#4/9","D#4/9": "D4/9","Eb4/9":"D4/9","E4/9": "D#4/9","F4/9": "E4/9","F#4/9": "F4/9","Gb4/9":"F4/9","G4/9": "F#4/9","G#4/9": "G4/9","Ab4/9":"G4/9","A4/9": "G#4/9","A#4/9": "A4/9","Bb4/9":"A4/9","B4/9": "A#4/9",
"C/F": "B/E","C#/F#": "C/F","Db/Gb": "C/F","D/G": "C#/F#","D#/G#": "D/G","Eb/Ab":"D/G","E/A": "D#/G#","F/A#": "E/A","F#/B": "F/A#","Gb/B":"F/A#","G/C": "F#/B","G#/C#": "G/C","Ab/Db":"G/C","A/D": "G#/C#","A#/D#": "A/D","Bb/D#":"A/D","B/E": "A#/D#",
"C9/F": "B9/E","C#9/F#": "C9/F","Db9/Gb": "C9/F","D9/G": "C#9/F#","D#9/G#": "D9/G","Eb9/Ab":"D9/G","E9/A": "D#9/G#","F9/A#": "E9/A","F#9/B": "F9/A#","Gb9/B":"F9/A#","G9/C": "F#9/B","G#9/C#": "G9/C","Ab9/Db":"G9/C","A9/D": "G#9/C#","A#9/D#": "A9/D","Bb9/D#":"A9/D","B9/E": "A#9/D#",
"Cm7-5": "Bm7-5","C#m7-5": "Cm7-5","Dbm7-5": "Cm7-5","Dm7-5": "C#m7-5","D#m7-5": "Dm7-5","Ebm7-5":"Dm7-5","Em7-5": "D#m7-5","Fm7-5": "Em7-5","F#m7-5": "Fm7-5","Gbm7-5":"Fm7-5","Gm7-5": "F#m7-5","G#m7-5": "Gm7-5","Abm7-5":"Gm7-5","Am7-5": "G#m7-5","A#m7-5": "Am7-5","Bbm7-5":"Am7-5","Bm7-5": "A#m7-5",
"Cm9": "Bm9","C#m9": "Cm9","Dbm9": "Cm9","Dm9": "C#m9","D#m9": "Dm9","Ebm9":"Dm9","Em9": "D#m9","Fm9": "Em9","F#m9": "Fm9","Gbm9":"Fm9","Gm9": "F#m9","G#m9": "Gm9","Abm9":"Gm9","Am9": "G#m9","A#m9": "Am9","Bbm9":"Am9","Bm9": "A#m9",
"Cm11": "Bm11","C#m11": "Cm11","Dbm11": "Cm11","Dm11": "C#m11","D#m11": "Dm11","Ebm11":"Dm11","Em11": "D#m11","Fm11": "Em11","F#m11": "Fm11","Gbm11":"Fm11","Gm11": "F#m11","G#m11": "Gm11","Abm11":"Gm11","Am11": "G#m11","A#m11": "Am11","Bbm11":"Am11","Bm11": "A#m11"
};var mapMaisMeioTom = {
"C": "C#","C#": "D","Db": "D","D": "D#","D#": "E","Eb": "E","E": "F","F": "F#","F#": "G","Gb": "G","G": "G#","G#": "A","Ab": "A","A": "A#","A#": "B","Bb": "B","B":"C",
"Cm": "C#m","C#m": "Dm","Dbm": "Dm","Dm": "D#m","D#m": "Em","Ebm": "Em","Em": "Fm","Fm": "F#m","F#m": "Gm","Gbm": "Gm","Gm": "G#m","G#m": "Am","Abm": "Am","Am": "A#m","A#m": "Bm","Bbm": "Bm","Bm":"Cm",
"Cm7": "C#m7","C#m7": "Dm7","Dbm7": "Dm7","Dm7": "D#m7","D#m7": "Em7","Ebm7": "Em7","Em7": "Fm7","Fm7": "F#m7","F#m7": "Gm7","Gbm7": "Gm7","Gm7": "G#m7","G#m7": "Am7","Abm7": "Am7","Am7": "A#m7","A#m7": "Bm7","Bbm7": "Bm7","Bm7":"Cm7",
"C7": "C#7","C#7": "D7","Db7": "D7","D7": "D#7","D#7": "E7","Eb7": "E7","E7": "F7","F7": "F#7","F#7": "G7","Gb7": "G7","G7": "G#7","G#7": "A7","Ab7": "A7","A7": "A#7","A#7": "B7","Bb7": "B7","B7":"C7",
"C/E": "C#/F","C#/F": "D/F#","Db/F": "D/F#","D/F#": "D#/G","D#/G": "E/G#","Eb/G": "E/G#","E/G#": "F/A","F/A": "F#/A#","F#/A#": "G/B","Gb/A#": "G/B","G/B": "G#/C","G#/C": "A/C#","Ab/C": "A/C#","A/C#": "A#/D","A#/D": "B/D#","Bb/D": "B/D#","B/D#":"C/E",
"C7+": "C#7+","C#7+": "D7+","Db7+": "D7+","D7+": "D#7+","D#7+": "E7+","Eb7+": "E7+","E7+": "F7+","F7+": "F#7+","F#7+": "G7+","Gb7+": "G7+","G7+": "G#7+","G#7+": "A7+","Ab7+": "A7+","A7+": "A#7+","A#7+": "B7+","Bb7+": "B7+","B7+":"C7+",
"C7+/9": "B7+/9","C#7+/9": "C7+/9","Db7+/9": "C7+/9","D7+/9": "C#7+/9","D#7+/9": "D7+/9","Eb7+/9":"D7+/9","E7+/9": "D#7+/9","F7+/9": "E7+/9","F#7+/9": "F7+/9","Gb7+/9":"F7+/9","G7+/9": "F#7+/9","G#7+/9": "G7+/9","Ab7+/9":"G7+/9","A7+/9": "G#7+/9","A#7+/9": "A7+/9","Bb7+/9":"A7+/9","B7+/9": "A#7+/9",
"C9": "C#9","C#9": "D9","Db9": "D9","D9": "D#9","D#9": "E9","Eb9": "E9","E9": "F9","F9": "F#9","F#9": "G9","Gb9": "G9","G9": "G#9","G#9": "A9","Ab9": "A9","A9": "A#9","A#9": "B9","Bb9": "B9","B9":"C9",
"C/D": "C#/D#","C#/D#": "D/E","Db/Eb": "D/E","D/E": "D#/F","D#/F": "E/F#","Eb/F": "E/F#","E/F#":"F/G","F/G":"F#/G#","F#/G#": "G/A","Gb/Ab":"G/A","G/A": "G#/A#","G#/A#":"A/B","Ab/Bb":"A/B","A/B":"A#/C","A#/C":"B/C#","Bb/C":"B/C#","B/C#":"C/D",
"Cm7/A#": "C#m7/B","C#m7/B": "Dm7/C","Dbm7/B": "Dm7/C","Dm7/C": "D#m7/C#","D#m7/C#": "Em7/D","Ebm7/Db": "Em7/D","Em7/D": "Fm7/D#","Fm7/D#": "F#m7/E","F#m7/E": "Gm7/F","Gbm7/E": "Gm7/F","Gm7/F": "G#m7/F#","G#m7/F#": "Am7/G","Abm7/Gb": "Am7/G","Am7/G": "A#m7/G#","A#m7/G#": "Bm7/A","Bbm7/Ab": "Bm7/A","Bm7/A":"Cm7/A#",
"C°": "C#°","C#°": "D°","Db°": "D°","D°": "D#°","D#°": "E°","Eb°": "E°","E°": "F°","F°": "F#°","F#°": "G°","Gb°": "G°","G°": "G#°","G#°": "A°","Ab°": "A°","A°": "A#°","A#°": "B°","Bb°": "B°","B°":"C°",
"Cº": "C#º","C#º": "Dº","Dbº": "Dº","Dº": "D#º","D#º": "Eº","Ebº": "Eº","Eº": "Fº","Fº": "F#º","F#º": "Gº","Gbº": "Gº","Gº": "G#º","G#º": "Aº","Abº": "Aº","Aº": "A#º","A#º": "Bº","Bbº": "Bº","Bº":"Cº",
"Cm°": "C#m°","C#m°": "Dm°","Dbm°": "Dm°","Dm°": "D#m°","D#m°": "Em°","Ebm°": "Em°","Em°": "Fm°","Fm°": "F#m°","F#m°": "Gm°","Gbm°": "Gm°","Gm°": "G#m°","G#m°": "Am°","Abm°": "Am°","Am°": "A#m°","A#m°": "Bm°","Bbm°": "Bm°","Bm°":"Cm°",
"Cmº": "C#mº","C#mº": "Dmº","Dbmº": "Dmº","Dmº": "D#mº","D#mº": "Emº","Ebmº": "Emº","Emº": "Fmº","Fmº": "F#mº","F#mº": "Gmº","Gbmº": "Gmº","Gmº": "G#mº","G#mº": "Amº","Abmº": "Amº","Amº": "A#mº","A#mº": "Bmº","Bbmº": "Bmº","Bmº":"Cmº",
"C°7": "C#°7","C#°7": "D°7","Db°7": "D°7","D°7": "D#°7","D#°7": "E°7","Eb°7": "E°7","E°7": "F°7","F°7": "F#°7","F#°7": "G°7","Gb°7": "G°7","G°7": "G#°7","G#°7": "A°7","Ab°7": "A°7","A°7": "A#°7","A#°7": "B°7","Bb°7": "B°7","B°7":"C°",
"Cº7": "C#º7","C#º7": "Dº7","Dbº7": "Dº7","Dº7": "D#º7","D#º7": "Eº7","Ebº7": "Eº7","Eº7": "Fº7","Fº7": "F#º7","F#º7": "Gº7","Gbº7": "Gº7","Gº7": "G#º7","G#º7": "Aº7","Abº7": "Aº7","Aº7": "A#º7","A#º7": "Bº7","Bbº7": "Bº7","Bº7":"Cº7",
"C/A#": "C#/B","C#/B": "D/C","Db/B": "D/C","D/C": "D#/C#","D#/C#": "E/D","Eb/Db": "E/D","E/D": "F/D#","F/D#": "F#/E","F#/E": "G/F","Gb/E": "G/F","G/F": "G#/F#","G#/F#": "A/G","Ab/Gb": "A/G","A/G": "A#/G#","A#/G#": "B/A","Bb/Ab": "B/A","B/A":"C/A#",
"C7/9": "C#7/9","C#7/9": "D7/9","Db7/9": "D7/9","D7/9": "D#7/9","D#7/9": "E7/9","Eb7/9": "E7/9","E7/9": "F7/9","F7/9": "F#7/9","F#7/9": "G7/9","Gb7/9": "G7/9","G7/9": "G#7/9","G#7/9": "A7/9","Ab7/9": "A7/9","A7/9": "A#7/9","A#7/9": "B7/9","Bb7/9": "B7/9","B7/9":"C7/9",
"Cm/D#": "C#m/E","C#m/E": "Dm/F","Dbm/E": "Dm/F","Dm/F": "D#m/F#","D#m/F#": "Em/G","Ebm/F#": "Em/G","Em/G": "Fm/G#","Fm/G#": "F#m/A","F#m/A": "Gm/A#","Gbm/A": "Gm/A#","Gm/A#": "G#m/B","G#m/B": "Am/C","Abm/B": "Am/C","Am/C": "A#m/C#","A#m/C#": "Bm/D","Bbm/C#": "Bm/D","Bm/D":"Cm/D#",
"C/E": "C#/F","C#/F": "D/F#","Db/F": "D/F#","D/F#": "D#/G","D/Gb": "D#/G","D#/G": "E/G#","Eb/G": "E/G#","E/G#": "F/A","E/Ab": "F/A","F/A": "F#/A#","F#/A#": "G/B","F#/Bb": "G/B","Gb/A#": "G/B","Gb/Bb": "G/B","G/B": "G#/C","G#/C": "A/C#","Ab/C": "A/C#","A/C#": "A#/D","A/Db": "A#/D","A#/D": "B/D#","Bb/D": "B/D#","B/D#":"C/E","B/Eb":"C/E",
"C/G": "C#/G#","C#/G#": "D/A","Db/Ab": "D/A","D/A": "D#/A#","D#/A#": "E/B","Eb/Bb": "E/B","E/B": "F/C","F/C": "F#/C#","F#/C#": "G/D","Gb/Db": "G/D","G/D": "G#/D#","G#/D#": "A/E","Ab/Eb": "A/E","A/E": "A#/F","A#/F": "B/F#","Bb/F": "B/F#","B/F#":"C/G",
"C9/G": "C#9/G#","C#9/G#": "D9/A","Db9/Ab": "D9/A","D9/A": "D#9/A#","D#9/A#": "E9/B","Eb9/Bb": "E9/B","E9/B": "F9/C","F9/C": "F#9/C#","F#9/C#": "G9/D","Gb9/Db": "G9/D","G9/D": "G#9/D#","G#9/D#": "A9/E","Ab9/Eb": "A9/E","A9/E": "A#9/F","A#9/F": "B9/F#","Bb9/F": "B9/F#","B9/F#":"C9/G",
"Cm/A#": "C#m/B","C#m/B": "Dm/C","Dbm/B": "Dm/C","Dm/C": "D#m/C#","D#m/C#": "Em/D","Ebm/Db": "Em/D","Em/D": "Fm/D#","Fm/D#": "F#m/E","F#m/E": "Gm/F","Gbm/E": "Gm/F","Gm/F": "G#m/F#","G#m/F#": "Am/G","Abm/Gb": "Am/G","Am/G": "A#m/G#","A#m/G#": "Bm/A","Bbm/Ab": "Bm/A","Bm/A":"Cm/A#",
"Cm/G#": "C#m/A","C#m/A": "Dm/A#","Dbm/A": "Dm/A#","Dm/A#": "D#m/B","D#m/B": "Em/C","Ebm/B": "Em/C","Em/C": "Fm/C#","Fm/C#": "F#m/D","F#m/D": "Gm/D#","Gbm/D": "Gm/D#","Gm/D#": "G#m/E","G#m/E": "Am/F","Abm/E": "Am/F","Am/F": "A#m/F#","A#m/F#": "Bm/G","Bbm/F#": "Bm/G","Bm/G":"Cm/G#",
"C4": "C#4","C#4": "D4","Db4": "D4","D4": "D#4","D#4": "E4","Eb4": "E4","E4": "F4","F4": "F#4","F#4": "G4","Gb4": "G4","G4": "G#4","G#4": "A4","Ab4": "A4","A4": "A#4","A#4": "B4","Bb4": "B4","B4":"C4",
"C4/9": "C#4/9","C#4/9": "D4/9","Db4/9": "D4/9","D4/9": "D#4/9","D#4/9": "E4/9","Eb4/9": "E4/9","E4/9": "F4/9","F4/9": "F#4/9","F#4/9": "G4/9","Gb4/9": "G4/9","G4/9": "G#4/9","G#4/9": "A4/9","Ab4/9": "A4/9","A4/9": "A#4/9","A#4/9": "B4/9","Bb4/9": "B4/9","B4/9":"C4/9",
"C/F": "C#/F#","C#/F#": "D/G","Db/Gb": "D/G","D/G": "D#/G#","D#/G#": "E/A","Eb/Ab": "E/A","E/A": "F/A#","F/A#": "F#/B","F#/B": "G/C","Gb/B": "G/C","G/C": "G#/C#","G#/C#": "A/D","Ab/Db": "A/D","A/D": "A#/D#","A#/D#": "B/E","Bb/Eb": "B/E","B/E":"C/F",
"C9/F": "C#9/F#","C#9/F#": "D9/G","Db/Gb": "D9/G","D9/G": "D#9/G#","D#9/G#": "E9/A","Eb9/Ab": "E9/A","E9/A": "F9/A#","F9/A#": "F#9/B","F#9/B": "G9/C","Gb9/B": "G9/C","G9/C": "G#9/C#","G#9/C#": "A9/D","Ab9/Db": "A9/D","A9/D": "A#9/D#","A#9/D#": "B9/E","Bb9/Eb": "B9/E","B9/E":"C9/F",
"Cm7-5": "C#m7-5","C#m7-5": "Dm7-5","Dbm7-5": "Dm7-5","Dm7-5": "D#m7-5","D#m7-5": "Em7-5","Ebm7-5": "Em7-5","Em7-5": "Fm7-5","Fm7-5": "F#m7-5","F#m7-5": "Gm7-5","Gbm7-5": "Gm7-5","Gm7-5": "G#m7-5","G#m7-5": "Am7-5","Abm7-5": "Am7-5","Am7-5": "A#m7-5","A#m7-5": "Bm7-5","Bbm7-5": "Bm7-5","Bm7-5":"Cm7-5",
"Cm9": "C#m9","C#m9": "Dm9","Dbm9": "Dm9","Dm9": "D#m9","D#m9": "Em9","Ebm9": "Em9","Em9": "Fm9","Fm9": "F#m9","F#m9": "Gm9","Gbm9": "Gm9","Gm9": "G#m9","G#m9": "Am9","Abm9": "Am9","Am9": "A#m9","A#m9": "Bm9","Bbm9": "Bm9","Bm9":"Cm9",
"Cm11": "C#m11","C#m11": "Dm11","Dbm11": "Dm11","Dm11": "D#m11","D#m11": "Em11","Ebm11": "Em11","Em11": "Fm11","Fm11": "F#m11","F#m11": "Gm11","Gbm11": "Gm11","Gm11": "G#m11","G#m11": "Am11","Abm11": "Am11","Am11": "A#m11","A#m11": "Bm11","Bbm11": "Bm11","Bm11":"Cm11"
};