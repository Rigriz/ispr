import { NextResponse, NextApiRequest } from 'next/server';
import {getalldata} from "./getdata"
export async function GET() {
  
    const data = await getalldata();
  return NextResponse.json({ data });
}