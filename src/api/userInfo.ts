import fetch from '../assets/fetch';
import { Toast } from 'antd-mobile'
/**
 * @author johnbian
 * @description 接口处理
 */
class UserAPI {

  /**
   * 获取营销员信息
   * @param agentId
   * @returns
   */
  public async getAgentInfo(agentId: string): Promise<any> {
    const params = {
      agentId,
    };
    const res = await fetch.post('/login/api/unionAgentInfo', params);
    if (res && res.code === '200') {
      return res.datas;
    } else if (res && res.message) {
      Toast.show(res.message);
      return null;
    } else {
      return null;
    }
  }
}

export default UserAPI;
