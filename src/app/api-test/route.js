import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const LINE_NOTIFY_TOKEN = "QKAyMnPM7Zkmz2xTb178S6ilrvBtuUa9LZDwv12EBtP";
    const message2 = `
    DO Number = ${data.data_1 || ""} 
    รายการสินค้า = ${data.data_2 || ""} 
    จำนวนสินค้าที่คืน = ${data.data_3 || 0} 
    ปัญหาของการแจ้งคืน = ${data.data_4 || ""} 
    Remake = ${data.data_5 || ""} 
    `;

    const response = await axios.post(
      "https://notify-api.line.me/api/notify",
      {
        message: message2,
        imageThumbnail : "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg",
        imageFullsize : "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470951917131-VO6KK2XIFP4LPLCYW7YU/McQueen15.jpg"
      },
      {
        headers: {
          Authorization: `Bearer ${LINE_NOTIFY_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return NextResponse.json({
      name : 'nattawut'
    });
  } catch (error) {
    console.log(error);
  }
}

