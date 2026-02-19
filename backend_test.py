#!/usr/bin/env python3
"""
Backend API Testing Script for Shivam Kushwah's Architecture Portfolio
Tests all FastAPI endpoints and MongoDB integration
"""

import requests
import json
from datetime import datetime
import sys
import os

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BASE_URL = get_backend_url()
if not BASE_URL:
    print("❌ Could not get backend URL from frontend/.env")
    sys.exit(1)

API_BASE = f"{BASE_URL}/api"
print(f"🔗 Testing backend at: {API_BASE}")

def test_hello_world():
    """Test GET /api/ endpoint"""
    print("\n📋 Testing Hello World endpoint...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Hello World endpoint working correctly")
                return True
            else:
                print(f"❌ Unexpected response: {data}")
                return False
        else:
            print(f"❌ Hello World endpoint failed with status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Hello World endpoint connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ Hello World endpoint error: {e}")
        return False

def test_create_status():
    """Test POST /api/status endpoint"""
    print("\n📋 Testing Create Status endpoint...")
    try:
        test_data = {
            "client_name": "Rajesh Kumar"
        }
        
        response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("client_name") == "Rajesh Kumar" and 
                "id" in data and 
                "timestamp" in data):
                print("✅ Create Status endpoint working correctly")
                return True, data.get("id")
            else:
                print(f"❌ Create Status response missing required fields: {data}")
                return False, None
        else:
            print(f"❌ Create Status endpoint failed with status {response.status_code}")
            return False, None
    except requests.exceptions.RequestException as e:
        print(f"❌ Create Status endpoint connection error: {e}")
        return False, None
    except Exception as e:
        print(f"❌ Create Status endpoint error: {e}")
        return False, None

def test_get_status():
    """Test GET /api/status endpoint"""
    print("\n📋 Testing Get Status endpoint...")
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: Found {len(data)} status checks")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check if the data has the expected structure
                    first_item = data[0]
                    if ("client_name" in first_item and 
                        "id" in first_item and 
                        "timestamp" in first_item):
                        print("✅ Get Status endpoint working correctly")
                        return True
                    else:
                        print(f"❌ Get Status response items missing required fields: {first_item}")
                        return False
                else:
                    print("✅ Get Status endpoint working (empty list)")
                    return True
            else:
                print(f"❌ Get Status endpoint should return a list, got: {type(data)}")
                return False
        else:
            print(f"❌ Get Status endpoint failed with status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Get Status endpoint connection error: {e}")
        return False
    except Exception as e:
        print(f"❌ Get Status endpoint error: {e}")
        return False

def test_cors():
    """Test CORS configuration"""
    print("\n📋 Testing CORS configuration...")
    try:
        # Test preflight request
        response = requests.options(
            f"{API_BASE}/status",
            headers={
                "Origin": "https://example.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            timeout=10
        )
        
        print(f"CORS Preflight Status Code: {response.status_code}")
        
        # Check CORS headers
        cors_headers = {
            "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
            "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
            "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
        }
        
        print(f"CORS Headers: {cors_headers}")
        
        if (response.status_code in [200, 204] and 
            cors_headers["Access-Control-Allow-Origin"]):
            print("✅ CORS configuration working")
            return True
        else:
            print("❌ CORS configuration may have issues")
            return False
    except Exception as e:
        print(f"❌ CORS test error: {e}")
        return False

def test_mongodb_integration():
    """Test MongoDB integration by creating and retrieving data"""
    print("\n📋 Testing MongoDB Integration...")
    
    # First, create a status check
    create_success, created_id = test_create_status()
    if not create_success:
        print("❌ MongoDB integration failed - cannot create data")
        return False
    
    # Then, retrieve all status checks to verify persistence
    get_success = test_get_status()
    if not get_success:
        print("❌ MongoDB integration failed - cannot retrieve data")
        return False
    
    print("✅ MongoDB integration working correctly")
    return True

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Shivam Kushwah's Architecture Portfolio")
    print("=" * 70)
    
    results = {
        "hello_world": False,
        "create_status": False,
        "get_status": False,
        "cors": False,
        "mongodb": False
    }
    
    # Test individual endpoints
    results["hello_world"] = test_hello_world()
    results["create_status"], _ = test_create_status()
    results["get_status"] = test_get_status()
    results["cors"] = test_cors()
    
    # Test MongoDB integration (combines create and get)
    results["mongodb"] = test_mongodb_integration()
    
    # Summary
    print("\n" + "=" * 70)
    print("📊 TEST SUMMARY")
    print("=" * 70)
    
    passed = sum(results.values())
    total = len(results)
    
    for test_name, passed_test in results.items():
        status = "✅ PASS" if passed_test else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend tests PASSED! Backend is healthy and ready.")
        return True
    else:
        print("⚠️  Some backend tests FAILED. Check the issues above.")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)