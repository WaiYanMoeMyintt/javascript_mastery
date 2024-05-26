const drum_kit = document.querySelectorAll("#drum_kit");
const audio_list = document.querySelector("#audio");
const drum_notes = [
  {
    id: 0,
    source_path: "../assets/boom.mp3",
  },
  { id: 1, source_path: "../assets/clap.mp3" },
  {
    id: 2,
    source_path: "../assets/hihat.mp3",
  },
  {
    id: 3,
    source_path: "../assets/kick.mp3",
  },
  {
    id: 4,
    source_path: "../assets/openhat.mp3",
  },
  {
    id: 5,
    source_path: "../assets/ride.mp3",
  },
  {
    id: 6,
    source_path: "../assets/snare.mp3",
  },
  {
    id: 7,
    source_path: "../assets/tink.mp3",
  },
  {
    id: 8,
    source_path: "../assets/tom.mp3",
  },
];

document.addEventListener("keyup", (event) => {
    const convertKey = event.key.toUpperCase();
    drum_kit.forEach((drum_items, kit_index) => {
      const getKey = drum_items.textContent;
      if (convertKey === getKey && convertKey) {
          drum_notes.map((items, note_index)=>{
               if(kit_index === note_index){
                    audio_list.src = items.source_path;
                    drum_items.classList.add("play_sound")
                    setTimeout(()=>{
                      drum_items.classList.remove("play_sound")
                    },200)
                    audio_list.play();
               }
          });
      } else {
        return null;
      }
    });
  });
