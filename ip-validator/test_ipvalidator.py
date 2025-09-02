from ipvalidator import IPValidator

def test_is_valid_ip_address():
    ip_validator = IPValidator()
    assert ip_validator.validate_ipv4_address("1.1.1.1") == True