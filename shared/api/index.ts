import axios from "axios";
import { NextRequest } from "next/server";

export const getCustomer = axios.get('/api/customer')