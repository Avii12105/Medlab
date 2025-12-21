// User types
export interface User {
  id: string;
  username: string;
  password_hash?: string;
  created_at?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  username: string;
  token: string;
}

// Patient types
export interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
  email?: string;
  created_at?: string;
}

export interface CreatePatientRequest {
  name: string;
  age: number;
  phone: string;
  email?: string;
}

// Test types
export interface LabTest {
  id: string;
  category_id: number;
  name: string;
  normal_min: number;
  normal_max: number;
  unit: string;
  result_type?: 'NUMERIC' | 'TEXTUAL';
  normal_values?: string;
  category_name?: string;
  created_at?: string;
}

export interface CreateTestRequest {
  categoryId: number;
  name: string;
  normalMin: number;
  normalMax: number;
  unit: string;
  result_type?: 'NUMERIC' | 'TEXTUAL';
}

// Test Category types
export interface TestCategory {
  id: number;
  name: string;
  created_at?: string;
}

export interface CreateTestCategoryRequest {
  name: string;
}

// Report types
export interface Report {
  id: string;
  patient_id: string;
  patient_name?: string;
  created_at: string;
  items?: ReportItem[];
}

export interface CreateReportRequest {
  patientId: string;
}

// Report Item types
export interface ReportItem {
  id: string;
  report_id: string;
  test_id: string;
  test_name?: string;
  result_value: string | number;
  status: 'LOW' | 'NORMAL' | 'HIGH';
  unit?: string;
  normal_min?: number;
  normal_max?: number;
  normal_values?: string;
  created_at?: string;
}

export interface CreateReportItemRequest {
  testId: string;
  resultValue: string | number;
  status: 'LOW' | 'NORMAL' | 'HIGH';
}
