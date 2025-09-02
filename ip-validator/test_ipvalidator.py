import pytest
from ipvalidator import IPValidator

@pytest.fixture
def ip_validator():
    return IPValidator()

def test_is_valid_ip_address(ip_validator):
    assert ip_validator.validate_ipv4_address("1.1.1.1") == True

def test_invalid_ip_address_ending_with_0(ip_validator):
    assert ip_validator.validate_ipv4_address("0.0.0.0") == False

def test_invalid_ip_address_ending_with_255(ip_validator):
    assert ip_validator.validate_ipv4_address("0.0.0.255") == False

def test_invalid_no_of_parts(ip_validator):
    assert ip_validator.validate_ipv4_address("10.0.0") == False
    assert ip_validator.validate_ipv4_address("10.0.0.0.1") == False

def test_invalid_non_numeric_parts(ip_validator):
    assert ip_validator.validate_ipv4_address("10.0.0.a") == False
    assert ip_validator.validate_ipv4_address("10.0..1") == False
    assert ip_validator.validate_ipv4_address("10.0.-1.1") == False

def test_leading_zeros(ip_validator):
    assert ip_validator.validate_ipv4_address("10.0.01.1") == False
