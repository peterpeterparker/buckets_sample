import { buckets_sample } from "../../declarations/buckets_sample";

const initCanister = async () => {
    try {
        const principal = await buckets_sample.init();
        console.log('Init', principal.toText());
    } catch (err) {
        console.error(err);
    }
}
const init = () => {
  const btnInit = document.querySelector("button#init");
  btnInit.addEventListener("click", initCanister);
};

document.addEventListener("DOMContentLoaded", init);
