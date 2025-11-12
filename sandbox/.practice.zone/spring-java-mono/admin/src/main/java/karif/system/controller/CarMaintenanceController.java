package karif.system.controller;

import karif.system.dto.CarMaintenanceInfo;
import karif.system.service.CarMaintenanceService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarMaintenanceController {

    private final CarMaintenanceService carMaintenanceService;

    public CarMaintenanceController(CarMaintenanceService carMaintenanceService) {
        this.carMaintenanceService = carMaintenanceService;
    }

    @GetMapping("/car-maintenance-info")
    public List<CarMaintenanceInfo> getCarMaintenanceInfo(
            @RequestParam(required = false) String assocNm,
            @RequestParam String startAt,
            @RequestParam String endAt
    ) {
        return carMaintenanceService.getCarMaintenanceInfo(assocNm, startAt, endAt);
    }
}