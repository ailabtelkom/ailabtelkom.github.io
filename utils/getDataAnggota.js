import Axios from "axios";

Axios.defaults.withCredentials = true;


const getDataAnggota = async () => {
  try {
    const res = await Axios.post(
      "https://https://botIgadis.aliven.my.id/getSheetAI",
      {
        id_spreadsheet: "1SaXnuRt-1KXyDGS18KqU7cus4_IWNxpGhiVy0J1vz-U",
        email: "sheet-access@web-amazing-ai.iam.gserviceaccount.com",
        sheet_title: "web"
      }
      );
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export { getDataAnggota };
