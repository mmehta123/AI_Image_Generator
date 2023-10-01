import { surpriseMePrompts } from "../constant";
import fileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt=surpriseMePrompts[randomIndex];
  if(prompt===randomPrompt) return getRandomPrompts(prompt)
  return randomPrompt;
}

export const downloadPhoto=async(_id,photo)=>{
fileSaver.saveAs(photo,`download-${_id}.jpg`)
}
