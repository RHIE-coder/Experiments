package karif.system.mapper;

import karif.system.dto.CarMaintenanceInfo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import java.util.List;

@Mapper
public interface CarMaintenanceMapper {
    List<CarMaintenanceInfo> findCarMaintenanceInfo(
        @Param("assocNm") String assocNm,
        @Param("startAt") String startAt,
        @Param("endAt") String endAt
    );
}