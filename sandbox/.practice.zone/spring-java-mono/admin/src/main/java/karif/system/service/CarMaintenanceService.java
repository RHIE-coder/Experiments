package karif.system.service;

import karif.system.dto.CarMaintenanceInfo;
import karif.system.mapper.CarMaintenanceMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarMaintenanceService {

    private final CarMaintenanceMapper carMaintenanceMapper;

    public CarMaintenanceService(CarMaintenanceMapper carMaintenanceMapper) {
        this.carMaintenanceMapper = carMaintenanceMapper;
    }

    public List<CarMaintenanceInfo> getCarMaintenanceInfo(String assocNm, String startAt, String endAt) {
        return carMaintenanceMapper.findCarMaintenanceInfo(assocNm, startAt, endAt);
    }
}