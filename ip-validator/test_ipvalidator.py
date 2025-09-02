import pytest
from ipvalidator import IPValidator

@pytest.fixture
def ip_validator():
    return IPValidator()

def test_is_valid_ip_address(ip_validator):
    assert ip_validator.validate_ipv4_address("1.1.1.1") == True

def test_invalid_ip_addres(ip_validator):
    assert ip_validator.validate_ipv4_address("0.0.0.0") == False
