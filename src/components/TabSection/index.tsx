import { Tabs } from 'antd';
import CollapseDisplay from '../CollapseDisplay';
import './TabSection.scss';

function TabSection() {
  const { TabPane } = Tabs;

  return (
    <div className="tab-section-container">
      <Tabs className="tab-section" defaultActiveKey="1">
        <TabPane
          tab={
            <div className="custom-label-tab">
              <div>Protege a</div>
              <div />
              tu auto
            </div>
          }
          key="1">
          <CollapseDisplay />
        </TabPane>
        <TabPane
          tab={
            <div className="custom-label-tab">
              <div>Protege a los</div>
              <div />
              que te rodean
            </div>
          }
          key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane
          tab={
            <div className="custom-label-tab">
              <div>Mejora tu</div>
              <div />
              plan
            </div>
          }
          key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabSection;
